import React from 'react'
import {StaticImage} from "gatsby-plugin-image"

const LandingSpace = () => {
	return (
		<div id="LandingSpace">
			<div id="LandingSpaceContainer">
				<StaticImage
					src="../images/layershapes.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt=""
					loading="eager"
					placeholder="tracedSVG"
					style={{position:'absolute'}}
					 />
			 <StaticImage
					src="../images/layershapes2.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt=""
					loading="eager"
					placeholder="tracedSVG"
					style={{position:'absolute'}}
					 />
			 <StaticImage
					src="../images/layershapes3.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt=""
					loading="eager"
					placeholder="tracedSVG"
					style={{position:'absolute'}}
					 />

				 <div id="LandingSpaceImage">
					 <StaticImage
						src="../images/TopView.png"
						transformOptions={{fit:"cover"}}
						formats={["auto","webp"]}
						id="LandingSpaceImage"
						layout="constrained"
						loading="eager"
						placeholder="tracedSVG"
						style={{minHeight:'100%',objectFit:'cover',position:'relative',right:'0',overflow:'visible'}}
						alt="Scene of a man with binoculars and a women analyzing data"
						 />
				 </div>
			<div id="LandingSpaceText">
				<h1>The Quintessential Auditing Tool</h1>
				<p>The complete suite to inspect, organize, and manage medical coding audits, with efficiency. </p>
			</div>
		</div>
	</div>
	)
}

export default LandingSpace

// style={{
// 	position:'absolute',
// 	top:'25vh',
// 	right:'0%',
// 	marginBottom:'1rem',
// 	width:'clamp(30rem, 80%, 100rem)',
// 	maxWidth:"90rem"
//
// }}
