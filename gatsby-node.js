/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allDesigner {
        nodes {
          id
          name
          website
          fullSVG {
            absolutePath
          }
        }
      }
      allModels {
        nodes {
          id
          name
          fields {
            slug
          }
          series {
            id
            designer {
              id
            }
          }
        }
      }
      allSeries {
        nodes {
          id
          name
          designer {
            id
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const series = result.data.allSeries.nodes;
  const seriesTemplate = path.resolve("./src/templates/series.tsx");
  const models = result.data.allModels.nodes;
  const modelsTemplate = path.resolve("./src/templates/models.tsx");
  const designers = result.data.allDesigner.nodes;
  const designerTemplate = path.resolve("./src/templates/designer.tsx");

  designers.forEach((data, index) => {
    createPage({
      path: data.id,
      component: designerTemplate,
      context: { id: data.id },
    });
  });
  series.forEach((data, index) => {
    createPage({
      path: `${data.designer.id}/${data.id}`,
      component: seriesTemplate,
      context: { id: data.id },
    });
  });
  models.forEach((data, index) => {
    createPage({
      path: `${data.series.designer.id}/${data.series.id}/${data.fields.slug}`,
      component: modelsTemplate,
      context: { slug: data.fields.slug },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);
  switch (node.internal.type) {
    case "Models":
      createNodeField({
        node,
        name: "slug",
        value: fileNode.name,
      });
    case "Series":
      if (fileNode.absolutePath.includes("src/data/")) {
        const designerReg = new RegExp("/data/[^/]+/", "g");
        const res = designerReg.exec(fileNode.absolutePath);
        let designer;
        if (res && res[0]) {
          const slashesRegex = new RegExp("/", "g");
          designer = res[0].replace(slashesRegex, "").replace("data", "");
        }
        // console.log(`Node created field "${designer}"`);

        createNodeField({
          node,
          name: "designer",
          value: designer,
        });
      }
      break;
    default:
      break;
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Series implements Node {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      name: String
      architecture: String
      releaseDate: Date
      models: [Models] @link(by: "series.id", from: "id")
      designer: Designer @link(by: "id", from: "fields.designer")
    }
    type ConnectorSpec {
      name: String!
      count: Int!
    }
    type MemorySpec {
      standardConfigSizeGB: Int
      standardConfigSpec: String
      interfaceBandwidthBit: Int
    }
    type MaxResolutionSpec {
      width: Int
      height: Int
    }
    type DisplaySpec {
      maxResolution: MaxResolutionSpec,
      monitorCount: Int
    }
    type GPUEngineSpec {
      nvidiaCUDACores: Int
      boostClockGhz: Float
    }
    type Models implements Node {
      series: Series @link
      name: String
      releaseDate: Date
      gpuEngine: GPUEngineSpec
      memory: MemorySpec
      display: DisplaySpec
      monitorCount: Int
      connectors: [ConnectorSpec]
      HDCP: String
    }
    type Designer implements Node {
      id: ID!
      parent: Node!
      children: [Node!]!
      internal: Internal!
      name: String!
      website: String
      fullSVG: File
      series: [Series] @link(by: "fields.designer", from: "id")
      models: [Models] @link(by: "series.designer.id", from: "id")

    }
    `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    Query: {
      recentModels: {
        type: `[Models!]!`,
        async resolve(source, args, context, info) {
          // Fetch Most recent Models
          const foundNodes = await context.nodeModel.runQuery({
            query: {
              sort: {
                fields: ["releaseDate"],
                order: ["DESC"],
              },
            },
            type: "Models",
          });
          const filterObj = {};
          // Return only most recent first instance of designer Model
          return foundNodes.filter((node) => {
            console.log(node.fields.designer, filterObj[node.fields.designer]);
            if (filterObj[node.fields.designer]) {
              return false;
            }
            filterObj[node.fields.designer] = true;
            return true;
          });
        },
      },
      recentSeries: {
        type: `[Series!]!`,
        async resolve(source, args, context, info) {
          // Fetch Most recent Series
          const foundNodes = await context.nodeModel.runQuery({
            query: {
              sort: {
                fields: ["releaseDate"],
                order: ["DESC"],
              },
            },
            type: "Series",
          });
          const filterObj = {};
          // Return only most recent first instance of designer Model
          return foundNodes.filter((node) => {
            if (filterObj[node.fields.designer]) {
              return false;
            }
            filterObj[node.fields.designer] = true;
            return true;
          });
        },
      },
    },
  });
};
