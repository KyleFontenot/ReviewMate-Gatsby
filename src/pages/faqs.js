import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import FAQBlock from "../components/FAQBlock.jsx"
// import CascadeBlock from "../components/CascadeBlock"

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
          answer
        }
        rawMarkdownBody
      }
    }
  }
}
}
    `
  );





  return (
    <Layout slug="FAQs">
      <h1>FAQs</h1>

      <Block row="column" className="faqsDiv">
        {datafaq.allFile.edges.sort((a, b) => a.node.childMarkdownRemark.frontmatter.order - b.node.childMarkdownRemark.frontmatter.order).map(edge => {
          return (
            <FAQBlock key={edge.node.id} questionData={edge.node.childMarkdownRemark.frontmatter.question} answerData={edge.node.childMarkdownRemark.frontmatter.answer} />
          )
        })}
      </Block>
    </Layout>
  )
}

export default Index;
