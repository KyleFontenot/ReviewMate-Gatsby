import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
// import Block from "../components/Block"
// import Card from "../components/Card"
import { GatsbyImage } from "gatsby-plugin-image"
// import FAQBlock from "../components/FAQBlock.jsx"
import CascadeBlockPlain from "../../components/CascadeBlockPlain"

const Index = () => {
  const {
    allContentfulAuditingManagementPageItems: { edges: items },
  } = useStaticQuery(graphql`
    query AuditingManagementQuery {
      allContentfulAuditingManagementPageItems {
        edges {
          node {
            bulletPoints
            id
            imageAssociated {
              gatsbyImageData
              description
              title
            }
            paragraph {
              paragraph
            }
            toolTitle
          }
        }
      }
    }
  `)

  return (
    <Layout slug="Auditing Management">
      <h1>Auditing Management</h1>
      <Hero bgimgUniqueName="presentation-and-collaboration.jpg" maxHeight="30rem">
        <div
          className="hero__text"
          style={{
            backgroundColor: "#9a2a24",
            color: "white",
            boxShadow: "-3px 8px 20px -2px #111",
            background: "linear-gradient(to bottom right, #A43F39, #6B1D19)",
          }}
        >
          <p>
            From Inpatient to Outpatient type coding audits, ReviewMate extends
            your auditing capabilities.
          </p>
        </div>
      </Hero>

      {items.map(item => {
        return (
          <CascadeBlockPlain key={item.node.id}>
            <div className="column cascadeBlock__img">
              <GatsbyImage
                image={item.node.imageAssociated.gatsbyImageData}
                alt={
                  item.node.imageAssociated.description ||
                  item.node.imageAssociated.description
                }
                layout="constrained"
              ></GatsbyImage>
            </div>
            <div className="column cascadeBlock__text">
              <h2>{item.node.toolTitle}</h2>
              <p>{item.node.paragraph.paragraph}</p>
                {!(item.node.bulletPoints === null || item.node.bulletPoints === undefined) ? (
                  <ul>
                    {item.node.bulletPoints.map(point => {
                      return <li key={Math.random() * 50000}>{point}</li>
                    })}
                  </ul>
                ) : null}
            </div>
          </CascadeBlockPlain>
        )
      })}
    </Layout>
  )
}

export default Index
