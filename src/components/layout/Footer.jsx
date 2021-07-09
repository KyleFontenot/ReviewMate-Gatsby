import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
// import LinkedInIcon from '../images/linkedin-brans.svg'

const Footer = () => {
	return (
		<footer>
			<div className="footerRow">
				<div className="footerDiv" style={{
						maxWidth:'6rem'
					}}>
					<StaticImage
						src={`../../images/reviewmate-whitelogo.svg` || `../../images/reviewmate-whitelogo.png`}
						alt="ReviewMate's logo of a magnifying glass with the written name."
						placeholder="tracedSVG"
						formats={["auto", "webp"]}
					/>
				</div>
				<div className="footerDiv" style={{
						minWidth:'12rem'
					}}>
				<table>
				  <thead>
						<tr>
						  <th>Product Features</th>
							<th>Info</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						  <td><Link to="/products/auditingtools">Auditing Tools</Link></td>
							<td><Link to="/faqs">FAQs</Link></td>
						</tr>
						<tr>
						  <td><Link to="/products/auditingsolutions">Auditing Solutions</Link></td>
							<td><Link to="/about">About Us</Link></td>
						</tr>
						<tr>
						  <td><Link to="/products/auditingmanagement">Auditing Management</Link></td>
							<td><Link to="/contact/">Contact</Link></td>

						</tr>
					</tbody>
			</table>
		</div>
			<div className="footerDiv footerContactGrid">
			<a href="https://www.linkedin.com/company/reviewmate-powered-by-pickerson-solutions-llc/" target="__blank" rel="noopener">
				<StaticImage src="../../images/linkedin-brands.svg"
					  transformOptions={{fit:"cover"}}
						alt="LinkedIn icon"
						className="socialIcon"
					/>
				<p>ReviewMate</p>
			</a>
		<a href="mailto:info@pickerson.com">
				<StaticImage src="../../images/envelope-solid.svg"
				  transformOptions={{fit:"cover"}}
					alt="Email icon"
					className="socialIcon"

				/><p>info@pickerson.com</p>
		</a>
		<a href="tel:+05890000111">
				<StaticImage src="../../images/phone-solid.svg"
				  transformOptions={{fit:"cover"}}
					alt="Email icon"
					className="socialIcon"
				/><p>(702)723-7227</p>
		</a>
	</div>
</div>
		<div id="FooterToes">
			<p style={{marginTop:'0.25rem'}}>&copy; Pickerson LLC  {new Date().getFullYear()}</p>
		</div>
		</footer>
	)
}

export default Footer
