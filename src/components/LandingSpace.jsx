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
					alt="#"
					style={{position:'absolute'}}
					 />
			 <StaticImage
					src="../images/layershapes2.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt="#"
					style={{position:'absolute'}}
					 />
			 <StaticImage
					src="../images/layershapes3.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt="#"
					style={{position:'absolute'}}
					 />

				<div id="LandingSpaceImage"
					  style={{
						position:'absolute',
						bottom:0,
						right:0,
						marginBottom:'1rem',
						maxWidth:'70rem'

					}}>
					<StaticImage
						src="../images/TopView.png"
						transformOptions={{fit:"cover"}}
						formats={["auto","webp"]}
						placeholder="tracedSVG"
						alt="Scene of a man with binoculars and a women analyzing data"
						style={{
							maxWidth:'40rem'
						}}
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
