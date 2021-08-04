
import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Block from "../components/Block"
// import BottomOptions from "../components/BottomOptions"
import HrDivider from "../components/HrDivider"
import styled from "@emotion/styled"

const SubheaderLine = styled.div`
    display:flex;
    margin: 0.75 auto 1rem;
    color: #777;
justify-content: space-around; 
width: 100%;
padding: 1.5rem;
`
export default function ModulePage({ data, pageContext, slug, id }) {
const moduleItem = data.markdownRemark;
const date = new Date(moduleItem.frontmatter.date); 
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const formattedDate = date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear();
const mainImage = getImage(moduleItem.frontmatter.image);

  return (
    <Layout slug={moduleItem.frontmatter.title}
    pathName={`/blog/${pageContext.slug}`}>
    <h1 style={{paddingTop:"1rem", paddingBottom:"0"}}>{`${moduleItem.frontmatter.title}`}</h1>
      <Block justify="center">
      <HrDivider style={{width: "100%", display: "block"}}/>
          <SubheaderLine > 
              {moduleItem.frontmatter.author ?
              <div>
                {`By:   ${moduleItem.frontmatter.author}`}
              </div> 
                      : null 
                      }
              {moduleItem.frontmatter.date?
              <div>
                {formattedDate}
                  </div> 
                      : null 
                    } 
          </SubheaderLine> 
          {mainImage ?
              <GatsbyImage image={mainImage}
                  alt="something"
                  placeholder="blurred"
                  style={{
                  boxShadow:'-1px 6px 12px -3px #000',
                  marginBottom:'1.4rem',
                  marginTop:'2.8rem',
                  paddingLeft: "1rem", 
                  paddingRight: "1rem"
              }} /> : null
          }
        <div dangerouslySetInnerHTML={{ __html: moduleItem.html }}
        style={{
          padding:'1rem',
          margin: '0.5rem auto 0',
          maxWidth:'50rem',
          background:'linear-gradient(to bottom right, #fff 60%, #eee)',
          borderRadius: '28px'
        }} />

      </Block>
    </Layout>
  )
}

export const  query = graphql`
query blog($id: String) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      overview
      title
      author
      date
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
