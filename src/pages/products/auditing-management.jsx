import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
// import Block from "../components/Block"
// import Card from "../components/Card"
import { GatsbyImage } from "gatsby-plugin-image"
// import FAQBlock from "../components/FAQBlock.jsx"
import CascadeBlockPlain from "../../components/CascadeBlockPlain"
import santizeSlug from "../../components/santizeSlug"
import LinkArrow from "../../images/diagonal-arrow.svg"

const Index = () => {
  const { allMarkdownRemark: {edges: items} } = useStaticQuery(graphql`
    query aManagement {
  allMarkdownRemark(
    filter: {frontmatter: {cmssegment: {eq: "modules"}, category: {eq: "Auditing Management"}}}
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
  const slug = "Auditing Management";
  return (
    <Layout slug={slug} pathName={`/products/${santizeSlug(slug)}`}>
      <h1>{slug}</h1>
      <Hero bgimgUniqueName="presentation-and-collaboration.jpg" maxHeight="30rem" style={{marginBottom:"2rem"}}>
        <div className="hero__text" style={{
						backgroundColor: "#9a2a24",
						color:'white',
						background:'linear-gradient(to bottom right, #A43F39, #6B1D19)',
            transform:'scale(1.1)'
					}}>
          <p>Approach all operations of your team from the top-down with ease. Automatic reporting consolidates results into actionable oportunities immediately. With thorough communication abilities both internal and external, convert your time into better results.</p>
        </div>
      </Hero>

			{items.sort((a, b) => a.node.frontmatter.order - b.node.frontmatter.order).map((item) => {
				return (
					<CascadeBlockPlain key={item.node.id}>
						<div className="column cascadeBlock__img">
							<GatsbyImage
								image={item.node.frontmatter.image.childImageSharp.gatsbyImageData}
								alt={item.node.frontmatter.alt || ' '}
								layout="constrained"
								>
								</GatsbyImage>
						</div>
					  <div className="column cascadeBlock__text">
							<Link to={`/products/${santizeSlug(slug)}/${santizeSlug(item.node.frontmatter.title)}/`}
              className="modulelink"
              ><h2>{item.node.frontmatter.title}<LinkArrow style={{maxHeight:"1rem", maxWidth:"1rem", marginLeft:"0.5rem", fill:"#9a2a24"}} ></LinkArrow></h2></Link>
           <div >
            {item.node.frontmatter.overview}
           </div>
           <Link to={`/products/auditing-management/${santizeSlug(item.node.frontmatter.title)}/`} style={{display:"block", margin:"2rem auto", textAlign:"center"}}>
             <button className="button button--subtle button--small" >
               See More
             </button>
           </Link>
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
