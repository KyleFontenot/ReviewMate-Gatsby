
exports.createPages = async function ({ actions, graphql }) {
const result = await graphql(`
	query module {
  allMarkdownRemark(filter: {frontmatter: {cmssegment: {eq: "modules"}}}) {
    edges {
      node {
        frontmatter {
          title
          category
        }
				id
      }
    }
  }
}
`)

const specialCharacterRegex = /[^a-zA-Z0-9\s]/g;
  result.data.allMarkdownRemark.edges.forEach(edge => {
    // const slug = edge.node.frontmatter.slug;

		// const slug = edge.node.frontmatter.title.split('').map(l => {
		// 	if(specialCharacterRegex.test(l)){
		// 		return
		// 	}
		// 	else {
		// 	l.toLowerCase()}}
		// )
		// .join('').replace(' ', '-');

		const slugArr = edge.node.frontmatter.title.split('')
		const trimmed = [];
			for(let i = 0; i < slugArr.length; i++){
				if(specialCharacterRegex.test(slugArr[i])){
					if(slugArr[i - 1] === " "){
						trimmed.pop()
					}
					break
				}
				else {
					trimmed.push(slugArr[i].toLowerCase())
			}
		}

		const slug = trimmed.join('').replace(' ', '-');



		const id = edge.node.id;
		const categorypath = edge.node.frontmatter.category.split('').map(l => l.toLowerCase()).join('').replace(' ', '-');

    actions.createPage({
      path: `/products/${categorypath}/${slug}/`,
      component: require.resolve(`./src/templates/modulepage.js`),
      context: { id: id, prefixPath: categorypath, slug: slug },
    })
  })
}
