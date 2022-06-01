// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
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
  `);
  if (blog.errors) {
    reporter.panicOnBuild(`There was an error in the GraphQL query.`);
  }
  blog.data.allNodeBlog.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.drupal_internal__nid}/`,
      component: path.resolve(`./src/templates/blogpost-templates.tsx`),
      context: {
        id: edge.node.id,
      },
    });
  });
};
