
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import BottomOptions from "../components/BottomOptions"
import HrDivider from "../components/HrDivider"



export default function ModulePage({ data, pageContext, slug, id }) {
const moduleItem = data.markdownRemark;

const mainImage = getImage(moduleItem.frontmatter.image);

  return (
    <Layout slug={moduleItem.frontmatter.title}
    pathName={`/products/${pageContext.prefixPath}/${pageContext.slug}`}>
    <h1 style={{paddingTop:"1rem", paddingBottom:"0"}}>{`${moduleItem.frontmatter.title} Module`}</h1>
      <Block justify="center">
      <HrDivider/>
        <GatsbyImage image={mainImage}
        alt="something"
        placeholder="blurred"
        style={{
          boxShadow:'-1px 6px 12px -3px #000',
          marginBottom:'1.4rem',
          marginTop:'2.8rem',
        }} />

        <div dangerouslySetInnerHTML={{ __html: moduleItem.html }}
        style={{
          padding:'1rem',
          margin: '0.5rem auto 0',
          maxWidth:'50rem',
          background:'linear-gradient(to bottom right, #fff 60%, #eee)',
          borderRadius: '28px'
        }} />

      </Block>
      <BottomOptions>
        <Link to={`/products/${pageContext.prefixPath}/`}>
          <button className="button button--subtle">
            More {moduleItem.frontmatter.category}
          </button>
        </Link>
        <Link to='/contact'>
          <button className="button button--pert">
            Schedule a demo!
          </button>
        </Link>
      </BottomOptions>
    </Layout>
  )
}

export const  query = graphql`
query blog($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      category
      overview
      title
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    html
  }
}


`
