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
  const { allContentfulAuditingToolsPageItems: {edges: items} } = useStaticQuery(graphql`
		query AuditingToolsQuery {
		  allContentfulAuditingToolsPageItems {
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
    <Layout slug="Auditing Tools">
      <h1>Auditing Tools</h1>
      <Hero bgimgUniqueName="medical-personnel-meeting.jpeg" maxHeight="30rem">
        <div className="hero__text" style={{
						backgroundColor: "#9a2a24",
						color:'white',
						background:'linear-gradient(to bottom right, #A43F39, #6B1D19)',
            transform:'scale(1.1)'
					}}>
          <p>Simply source your database to have all of the best, simplistic tools to perform audits and congregate findings at a lower level.</p>
          <p>ReviewMate allows an easy changing of roles and supplies a central location for passing all data. Role privileges scale capabilities with teams.</p>
        </div>
      </Hero>

			{items.map((item) => {
				return (
					<CascadeBlockPlain key={item.node.id}>
						<div className="column cascadeBlock__img">
							<GatsbyImage
								image={item.node.imageAssociated.gatsbyImageData}
								alt={item.node.imageAssociated.description || item.node.imageAssociated.description}
								layout="constrained"
								>
								</GatsbyImage>
						</div>
					  <div className="column cascadeBlock__text">
							<h2>{item.node.toolTitle}</h2>
							<p>{item.node.paragraph.paragraph}</p>
                {!(item.node.bulletPoints === null || item.node.bulletPoints === undefined) ? (
                  <ul>
                    {item.node.bulletPoints.map((point, index) => {
                      return <li key={index}>{point}</li>
                    })}
                  </ul>
                ) : null}
					  </div>

					</CascadeBlockPlain>
				)
			}
		)
		}


    </Layout>
  )
}

export default Index
