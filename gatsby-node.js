
exports.createPages = async function ({ actions, graphql }) {
const result = await graphql(`
	query module {
  allMarkdownRemark(filter: {frontmatter: {cmssegment: {eq: "modules"}}}) {
    edges {
      node {
        frontmatter {
          title
          category
					slug
        }
        id
      }
    }
  }
}
`)


  result.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
		const id = edge.node.id;
		const categorypath = edge.node.frontmatter.category.split('').map(l => l.toLowerCase()).join('').replace(' ', '-');

    actions.createPage({
      path: `/${categorypath}/${slug}`,
      component: require.resolve(`./src/templates/modulepage.js`),
      context: { id: id, prefixPath: categorypath, specialSlug: slug },
    })
  })
}
