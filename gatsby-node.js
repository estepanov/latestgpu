/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
  case "Models":
  case "Series":
    const fileNode = getNode(node.parent);
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
