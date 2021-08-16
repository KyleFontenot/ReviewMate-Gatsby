import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import BottomOptions from "../components/BottomOptions"
import HrDivider from "../components/HrDivider"
import styled from "@emotion/styled"

const Column = styled.div`
  display: block;
  flex: 1 1 auto;
  margin-left: 0;
  max-width: 100%;
  @media (max-width: 424px) {
    flex: ${props => (props.smWidth ? `0 0 ${props.smWidth}%` : null)};
    max-width: ${props => (props.smWidth ? `${props.smWidth}%` : null)};
  }
  @media (min-width: 425px) {
    flex: ${props => (props.mdWidth ? `0 0 ${props.mdWidth}%` : null)};
    max-width: ${props => (props.mdWidth ? `${props.mdWidth}%` : null)};
  }
  @media (min-width: 768px) {
    flex: ${props => (props.lgWidth ? `0 0 ${props.lgWidth}%` : null)};
    max-width: ${props => (props.lgWidth ? `${props.lgWidth}%` : null)};
  }
`

export default function ModulePage({ data, pageContext, slug, id }) {
  const moduleItem = data.markdownRemark

  const mainImage = getImage(moduleItem.frontmatter.image)

  return (
    <Layout
      slug={moduleItem.frontmatter.title}
      pathName={`/products/${pageContext.prefixPath}/${pageContext.slug}`}
    >
      <h1
        style={{ paddingTop: "1rem", paddingBottom: "0" }}
      >{`${moduleItem.frontmatter.title} Module`}</h1>
      <Block justify="center">
        <HrDivider />
        <GatsbyImage
          image={mainImage}
          alt="something"
          placeholder="blurred"
          style={{
            boxShadow: "-1px 6px 12px -3px #000",
            marginBottom: "2.4rem",
            marginTop: "2.8rem",
            margin: "2.4rem auto 2.8rem",
            maxHeight: "30rem",
            maxWidth: "90%",
          }}
        />

        <div
          dangerouslySetInnerHTML={{ __html: moduleItem.html }}
          style={{
            padding: "1rem",
            margin: "0.5rem auto 0",
            maxWidth: "50rem",
            background: "linear-gradient(to bottom right, #fff 60%, #eee)",
            borderRadius: "28px",
          }}
        />
      </Block>
      <BottomOptions>
        <Column style={{ textAlign: "center" }}>
          <Link to={`/products/${pageContext.prefixPath}/`}>
            <button className="button button--subtle">
              More {moduleItem.frontmatter.category}
            </button>
          </Link>
        </Column>

        <Column style={{ textAlign: "center" }}>
          <Link to="/contact">
            <button className="button button--pert">Schedule a demo!</button>
          </Link>
        </Column>
      </BottomOptions>
    </Layout>
  )
}

export const query = graphql`
  query module($id: String) {
    markdownRemark(id: { eq: $id }) {
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
