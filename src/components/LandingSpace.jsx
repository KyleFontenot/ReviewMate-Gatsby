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
					 />
			 <StaticImage
					src="../images/layershapes2.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt="#"
					 />
			 <StaticImage
					src="../images/layershapes3.png"
					transformOptions={{fit:"cover"}}
					className="LandingSpaceShapes"
					alt="#"
					 />

				<div id="LandingSpaceImage"
					  style={{
						width:'80%',
						position:'absolute',
						bottom:0,
						right:0
					}}>
					<StaticImage
						src="../images/TopView.png"
						transformOptions={{fit:"cover"}}
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
