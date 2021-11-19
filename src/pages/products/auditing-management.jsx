import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
import { GatsbyImage } from "gatsby-plugin-image"
import CascadeBlockPlain from "../../components/CascadeBlockPlain"
import santizeSlug from "../../components/santizeSlug"
import LinkArrow from "../../images/diagonal-arrow.svg"
// import ModuleQuery from '../../components/ModuleQuery'

const AuditingManagement = () => {
  const {
    allMarkdownRemark: { edges: items },
  } = useStaticQuery(graphql`
    query aManagement {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            cmssegment: { eq: "modules" }
            category: { eq: "Auditing Management" }
          }
        }
      ) {
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
  const slug = "Auditing Management"
  return (
    <Layout slug={slug} pathName={`/products/${santizeSlug(slug)}`}>
      <h1>{slug}</h1>
      <Hero
        bgimgUniqueName="presentation-and-collaboration.jpg"
        maxHeight="30rem"
        style={{ marginBottom: "2rem" }}
      >
        <div
          className="hero__text"
          style={{
            backgroundColor: "#9a2a24",
            color: "white",
            background: "linear-gradient(to bottom right, #A43F39, #6B1D19)",
            transform: "scale(1.1)",
          }}
        >
          <p>
            In addition to our auditing modules, ReviewMate has tools to assist
            audit managers with time management, workflow analytics, as well as
            assistance with data analytics. These tools will assist in analyzing
            the amount of time your auditor and coders are spending on
            particular tasks which in turn will allow better forecasting of
            future projects. It will also assist in identifying bottlenecks of a
            project to assure a smooth audit project.
          </p>
        </div>
      </Hero>

      {items
        .sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order)
        .map(item => {
          return (
            <CascadeBlockPlain key={item.node.id}>
              <div className="column cascadeBlock__img">
                <GatsbyImage
                  image={
                    item.node.frontmatter.image.childImageSharp.gatsbyImageData
                  }
                  alt={item.node.frontmatter.alt || " "}
                  layout="constrained"
                ></GatsbyImage>
              </div>
              <div className="column cascadeBlock__text">
                <Link
                  to={`/products/${santizeSlug(slug)}/${santizeSlug(
                    item.node.frontmatter.title
                  )}/`}
                  className="modulelink"
                >
                  <h2>
                    {item.node.frontmatter.title}
                    <LinkArrow
                      style={{
                        maxHeight: "1rem",
                        maxWidth: "1rem",
                        marginLeft: "0.5rem",
                        fill: "#9a2a24",
                      }}
                    ></LinkArrow>
                  </h2>
                </Link>
                <div>{item.node.frontmatter.overview}</div>
                <Link
                  to={`/products/auditing-management/${santizeSlug(
                    item.node.frontmatter.title
                  )}/`}
                  style={{
                    display: "block",
                    margin: "2rem auto",
                    textAlign: "center",
                  }}
                >
                  <button className="button button--subtle button--small">
                    See More
                  </button>
                </Link>
              </div>
            </CascadeBlockPlain>
          )
        })}
    </Layout>
  )
}

export default AuditingManagement
