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
					 />
					 <StaticImage
	 					src="../images/layershapes2.png"
	 					transformOptions={{fit:"cover"}}
	 					className="LandingSpaceShapes"
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
