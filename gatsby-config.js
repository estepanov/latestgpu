module.exports = {
  siteMetadata: {
    title: "LatestGPU",
    description: "Easily find the latest consumer GPUs and compare the models.",
    author: "@gatsbyjs",
  },
  mapping: {
    "allModelsJson.nodes.series": "seriesJson",
  },
  plugins: [
    {
      resolve: "gatsby-alias-imports",
      options: {
        aliases: {
          "~": "./src/",
          "~~": "./",
        },
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".png",
          ".jpg",
          ".svg",
          ".md",
          ".mdx",
          ".json",
        ],
      },
    },
    "gatsby-plugin-emotion",
    // 'gatsby-plugin-offline',
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "LatestGPU",
        short_name: "LatestGPU",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Oswald",
            subsets: ["latin"],
          },
          {
            family: "Open Sans",
            variants: ["400", "700"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: "./src/gatsby-graphql.ts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node }) => {
          let name;
          if (node.absolutePath.includes("/models/")) {
            name = "Models";
          }
          if (node.absolutePath.includes("/series/")) {
            name = "Series";
          }
          if (node.absolutePath.includes("designer.json")) {
            name = "Designer";
          }
          return name;
        },
      },
    },
  ],
};
