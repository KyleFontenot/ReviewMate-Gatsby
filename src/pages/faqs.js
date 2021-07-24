import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import FAQBlock from "../components/FAQBlock.jsx"
import santizeSlug from "../components/santizeSlug"

const Index = () => {
  const datafaq = useStaticQuery(
    graphql`
    query Faqsquery {
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
        html
      }
    }
  }
}
}
    `
  );
const slug = "FAQs"
  return (
    <Layout slug={slug} pathName={`${santizeSlug(slug)}`}>
      <h1>FAQs</h1>

      <Block row="column" column className="faqsDiv">
        {datafaq.allFile.edges.sort((a, b) => a.node.childMarkdownRemark.frontmatter.order - b.node.childMarkdownRemark.frontmatter.order).map(edge => {
          return (
            <FAQBlock key={edge.node.id} questionData={edge.node.childMarkdownRemark.frontmatter.question}
            answer={edge.node.childMarkdownRemark.html}>
            </FAQBlock>
          )
        })}
      </Block>
    </Layout>
  )
}

export default Index;
