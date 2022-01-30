const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blog = await graphql(`
    query {
      allNodeBlog(sort: { fields: created, order: DESC }) {
        edges {
          node {
            id
            drupal_internal__nid
          }
        }
      }
    }
  `)
  if (blog.errors) {
    reporter.panicOnBuild(`There was an error in the GraphQL query.`)
  }
  blog.data.allNodeBlog.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.drupal_internal__nid}/`,
      component: path.resolve(`./src/templates/blogpost-templates.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
  const record = await graphql(`
    query {
      allNodeRecord(sort: { fields: field_start_time, order: DESC }) {
        edges {
          node {
            id
            field_start_time(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)
  if (record.errors) {
    reporter.panicOnBuild(`There was an error in the GraphQL query.`)
  }
  record.data.allNodeRecord.edges.forEach((edge) => {
    createPage({
      path: `/about/record/${edge.node.field_start_time}/`,
      component: path.resolve(`./src/templates/recordpost-templates.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
  const event = await graphql(`
    query {
      allNodeEvent {
        edges {
          node {
            id
            field_start_time(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)
  if (event.errors) {
    reporter.panicOnBuild(`There was an error in the GraphQL query.`)
  }
  event.data.allNodeEvent.edges.forEach((edge) => {
    createPage({
      path: `/event/${edge.node.field_start_time}/`,
      component: path.resolve(`./src/templates/eventpost-templates.js`),
      context: {
        id: edge.node.id,
      },
    })
  })
}
