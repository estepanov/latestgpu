/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, actions, getNode }) => {
  console.log(`Node created of type "${node.internal.type}"`, node, actions);
  const { createNodeField } = actions;
  let designer;
  switch (node.internal.type) {
  case "ModelsJson":
  case "SeriesJson":
      console.log(
      `Node created of type "${node.internal.type}"`,
      node,
      actions
    );
    const fileNode = getNode(node.parent);
    // if (node.internal.type === "ModelsJson") {
    //   graphql
    //   // createParentChildLink({ parent: parentNode, child: node })
    // }
    if (fileNode.absolutePath.includes("src/data/")) {
        if (fileNode.relativePath.includes("amd")) designer = "AMD";
        if (fileNode.relativePath.includes("nvidia")) designer = "NVIDIA";
        console.log(`Node created field "${designer}"`);

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
