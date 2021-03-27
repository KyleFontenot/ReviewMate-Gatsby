import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Hero from "../components/Hero"
import Block from "../components/Block"
import Card from "../components/Card"
import { GatsbyImage } from "gatsby-plugin-image"
// import FAQBlock from "../components/FAQBlock.jsx"
// import CascadeBlock from "../components/CascadeBlock"

const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQueryAboutPage {
      teamMembers: allContentfulTeamMembersInAboutUs {
        edges {
          node {
            fullName
            id
            positionTitle
            bio {
              bio
            }
            photo {
              gatsbyImageData
            }
            order
          }
        }
      }
      pageInfo: contentfulAboutPage {
        backgroundParagraph {
          id
          backgroundParagraph
        }
        missionBlock {
          missionBlock
        }
        visionBlock {
          visionBlock
        }
        values
      }
    }
  `)

  return (
    <Layout slug="About">
      <h1>About Us</h1>
      <Hero bgimgUniqueName="analyzing-graph-growth.jpg" >
        <div className="hero__text" style={{ backgroundColor: "white" }}>
          <h2>Background</h2>
          <p>{data.pageInfo.backgroundParagraph.backgroundParagraph}</p>
        </div>
      </Hero>
      <Block row="">
        {data.teamMembers.edges
          .sort((a, b) => a.node.order - b.node.order)
          .map(edge => {
            return (
              <Card key={edge.node.id}>
                <GatsbyImage
                  image={edge.node.photo.gatsbyImageData}
                  alt=" "
                  className="card__image"
                />
                <h2>{edge.node.fullName}</h2>
                <h3>{edge.node.positionTitle}</h3>
                <p>{edge.node.bio.bio}</p>
              </Card>
            )
          })}
      </Block>
      <Block>
        <Card>
          <h2>Vision</h2>
          <p>{data.pageInfo.visionBlock.visionBlock}</p>
        </Card>
        <Card>
          <h2>Values</h2>
          <ul>
            {data.pageInfo.values.map(val => {
              return <li>{val}</li>
            })}
          </ul>
        </Card>
        <Card>
          <h2>Mission</h2>
          <p>{data.pageInfo.missionBlock.missionBlock}</p>
        </Card>
      </Block>
    </Layout>
  )
}

export default Index
