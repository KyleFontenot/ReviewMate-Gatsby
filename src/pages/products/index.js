import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
import Block from "../../components/Block"
import Card from "../../components/Card"
import santizeSlug from "../../components/santizeSlug"

const ProductsPage = () => {
  const slug = "Products"
  const {
    allMarkdownRemark: { edges: items },
  } = useStaticQuery(graphql`
    query Products {
      allMarkdownRemark(
        filter: { frontmatter: { cmssegment: { eq: "modules" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              category
              overview
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout slug={slug} pathName={santizeSlug(slug)}>
      <Hero
        bgimgUniqueName="analyzing-graph-growth.jpg"
        maxHeight="25rem"
        blurred
      >
        <div
          className="hero__text hero__text--minimal"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            color: "white",
            minWidth: "70%",
            boxShadow: "none",
          }}
        >
          <h1 style={{ color: "white" }}>Our Products</h1>
          <p
            style={{
              margin: "2rem auto",
              padding: "0 2rem 0",
              textIndent: "2rem",
              maxWidth: "60rem",
              letterSpacing: "0.75px",
            }}
          >
            Our auditing platform provides a centralized, transparent way for
            coding auditors to perform their audits, share their findings and
            report results. We also offer tools to assist with selecting samples
            for audit as well as a robust tool for monitoring the activities
            through the auditing process. Explore the details below to see how
            ReviewMate could benefit your organization.
          </p>
        </div>
      </Hero>

      <Block justify="center" style={{ marginBottom: "3rem" }}>
        <Link
          to="/products/auditing-tools/"
          aria-label="Auditing Tools"
          style={{
            textDecoration: "none",
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
          }}
        >
          <Card shadow style={{ width: "100%", marginTop: "0.5" }}>
            <h2>Auditing Tools →</h2>
            <h4>Performance</h4>
            <ul style={{ color: "#555" }}>
              {items.map((item, index) => {
                return item.node.frontmatter.category === "Auditing Tools" ? (
                  <li key={index}>{item.node.frontmatter.title}</li>
                ) : null
              })}
            </ul>
          </Card>
        </Link>
        <Link
          to="/products/auditing-solutions/"
          aria-label="Auditing Solutions"
          style={{
            textDecoration: "none",
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
          }}
        >
          <Card margin="1.5rem" shadow>
            <h2>Auditing Solutions →</h2>
            <h4>Sampling</h4>
            <ul style={{ color: "#555" }}>
              {items.map((item, index) => {
                return item.node.frontmatter.category ===
                  "Auditing Solutions" ? (
                  <li key={index}>{item.node.frontmatter.title}</li>
                ) : null
              })}
            </ul>
          </Card>
        </Link>
        <Link
          to="/products/auditing-management/"
          aria-label="Auditing Management"
          style={{
            textDecoration: "none",
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
          }}
        >
          <Card margin="1.5rem" shadow>
            <h2>Auditing Management →</h2>
            <h4>Analysis</h4>
            <ul style={{ color: "#555" }}>
              {items.map((item, index) => {
                return item.node.frontmatter.category ===
                  "Auditing Management" ? (
                  <li key={index}>{item.node.frontmatter.title}</li>
                ) : null
              })}
            </ul>
          </Card>
        </Link>
      </Block>
    </Layout>
  )
}
export default ProductsPage
