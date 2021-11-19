import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ModuleQuery = useStaticQuery(graphql`
  query modules {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            category
            order
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            overview
            slug
            alt
          }
          id
          html
        }
      }
    }
  }
`)

export default ModuleQuery
