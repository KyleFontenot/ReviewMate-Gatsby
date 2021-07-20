
import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"


export default function ModulePage({ data }) {
// const moduleItem = data.markdownRemark
// // const moduleItem  = data.markdownRemark;
// const mainImage = getImage(moduleItem.frontmatter.image);
  return (
    <Layout>
    {/*<h1>{moduleItem.frontmatter.title}</h1>
      <Block>
        <h4 style={{float:'right'}}>{moduleItem.frontmatter.category}</h4>
        <GatsbyImage image={moduleItem.frontmatter.image} alt="something" />
        <div dangerouslySetInnerHTML={{ __html: moduleItem.html }} />
      </Block>*/}
    <p> hi</p>
    </Layout>
  )
}

// /static/uploads/graph-business-financial-investment-risk.webp

// export const  query = graphql`
// query module($slug: String!) {
//   markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//     html
//     frontmatter {
//       title
//       slug
//       overview
//       category
//       image
//     }
//     rawMarkdownBody
//   }
// }
//
//
// `
