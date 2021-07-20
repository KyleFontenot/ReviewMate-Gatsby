
// exports.createPages = async function ({ actions, graphql }) {
// const result = await graphql(`
// 	query something {
//   allFile(filter: {sourceInstanceName: {eq: "modules"}}) {
//     edges {
//       node {
//         childMarkdownRemark {
//           rawMarkdownBody
//           frontmatter {
//             slug
//             category
// 						path
// 						image
//           }
//         }
//         id
//       }
//     }
//   }
// }
//
// `)
//   result.data.allFile.edges.forEach(edge => {
//     const slug = edge.node.childMarkdownRemark.frontmatter.slug;
// 		const image = edge.node.childMarkdownRemark.frontmatter.image;
// 		const id = edge.node.id;
//     actions.createPage({
//       path: `/${slug}`,
//       component: require.resolve(`./src/templates/modulepage.js`),
//       context: { id: id, slug: slug, image: image },
//     })
//   })
// }
