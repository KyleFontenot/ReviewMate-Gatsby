import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
// import Card from "./Card"

const Hero = ({ children, bgimgUniqueName, maxHeight, }) => {
	const data = useStaticQuery(graphql`
	query {
	  allImageSharp {
	    edges {
	      node {
	        fluid {
	          originalName
	        }
					gatsbyImageData
	      }
	    }
	  }
	}
	`
);
const match = data.allImageSharp.edges.find(edge => edge.node.fluid.originalName === bgimgUniqueName);

	return (
	<div style={{ display: "grid", }} className="hero">
	{bgimgUniqueName ? <GatsbyImage
			image={match.node.gatsbyImageData}
			alt=" "
			style={{
				gridArea: "1/1",
				maxHeight: maxHeight ? maxHeight : '65rem',
			}}
			layout="fullWidth"
			formats={["auto", "webp"]}
			loading="eager"
			placeholder="tracedSVG"
			 /> : <div style={{
				 backgroundColor: "#9a2a24",
				 gridArea: "1/1",
				 color:"#8A2520",
         backgroundImage: "linear-gradient(currentColor 2px, transparent 3px), linear-gradient(to right, currentColor 2px, transparent 3px)",
         backgroundSize: "25px 25px",
			 }} />}


    <div
      style={{
        gridArea: "1/1",
        position: "relative",
        placeItems: "center",
        display: "grid",
      }}
    >
		{children}

    </div>
		{/*Bottom border*/}
		<div style={{
			width: "100%",
			height: "10px",
			backgroundImage: "linear-gradient(to right, #ddd 20%, #888)",
			display: "block",
			position: "relative"
		}} />
  </div>
	)
}

export default Hero
