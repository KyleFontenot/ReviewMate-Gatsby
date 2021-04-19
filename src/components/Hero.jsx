import React from 'react'
// import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = ({ children, bgimgUniqueName, maxHeight }) => {
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
	<div style={{ display: "grid" }} className="hero">
		<GatsbyImage
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
				 />

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
  </div>
	)
}

export default Hero

// <StaticImage
// 	style={{
// 		gridArea: "1/1"
// 	}}
// 	layout="fullWidth"
// 	alt=""
// 	src={"../images/analyzing-graph-growth.jpg"}
// 	formats={["auto", "webp", "avif"]}
// />


// return (
// 	<div className="container hero" style={{display:'block',position:'relative',height:'20rem'}}>
// 		<StaticImage src={src}
// 			placeholder="blurred"
// 			alt={alt}
// 			loading="eager"
// 			backgroundColor="#777777"
// 			formats={["auto","webp"]}
// 			style={{maxHeight:"60rem"}}
// 			transformOptions={{fit:"cover", cropFocus: "attention"}}
// 			/>
// 		<p>{src}</p>
// 		{children}
// 	</div>
// )
