const { createFilePath } = require('gatsby-source-filesystem')

// Add `path` field to Mdx nodes.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'path',
      value: `/essays${value}`
    })
  }
}
