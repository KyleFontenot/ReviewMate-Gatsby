import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import FAQBlock from "../components/FAQBlock"


const IndexPage = () => {
	const faqQuery = useStaticQuery(
		graphql`
		query faqsquery {
allFile(filter: {sourceInstanceName: {eq: "faqs"}}) {
	edges {
		node {
			id
			childMarkdownRemark {
				frontmatter {
					title
					order
					question
				}
				rawMarkdownBody
				timeToRead
			}
		}
	}
}
}
		`
	)

	return (
		<Layout>
			<h1>Here is a tester page for experimenting with the new CMS functionality. </h1>

			{faqQuery.allFile.edges.map(edge => {
				return (
				<FAQBlock id={edge.node.id}
				questionData={edge.node.childMarkdownRemark.frontmatter.question}
				answerData={edge.node.childMarkdownRemark.rawMarkdownBody}
				/>)
			})}

		</Layout>
	)
}
export default IndexPage;
