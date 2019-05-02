const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const generatePage = require(`./config`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return Promise.all([
    generatePage(graphql, createPage, 'works'),
    generatePage(graphql, createPage, 'portfolio')
  ])

}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}
