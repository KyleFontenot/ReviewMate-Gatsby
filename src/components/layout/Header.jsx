import React from 'react'
import SEO from './seo'
import { StaticImage } from "gatsby-plugin-image"
import {Link} from "gatsby"

const Header = (props) => {
	return (
		<header>
			<SEO />
			<StaticImage
				  src="../../images/ReviewMate-main.png"
					alt="ReviewMate's logo of a magnifying glass with the written name."
					placeholder="tracedSVG"
					formats={["auto", "webp"]}
					transformOptions={{fit:"cover"}}
					id="MainLogo"
					style={{
						maxWidth:'15rem'
					}}
					/>
				<nav>
					  <ul>
							  <li>
									<Link to="#" className="navli">
										Products
									</Link>
								</li>
								<li>
									<Link to="#" className="navli">
										Events
									</Link>
								</li>
								<li>
									<Link to="#" className="navli">
										About
									</Link>
								</li>
								<li>
									<Link to="#" className="navli">
										Contact
									</Link>
								</li>
						</ul>
				</nav>
		</header>
	)
}

export default Header;
