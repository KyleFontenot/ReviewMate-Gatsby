import React from 'react'
import {StaticImage} from 'gatsby-plugin-image'
// import LinkedInIcon from '../images/linkedin-brans.svg'

const Footer = () => {
	return (
		<footer>
			<div className="footerRow">
				<div className="footerDiv">
				<table>
				  <thead>
						<tr>
						  <th>Product Features</th>
							<th>Info</th>
							<th>Contact</th>
						</tr>
					</thead>
					<tbody>
						<tr>
						  <td>Auditing Tools</td>
							<td>Events</td>
							<td>Contact Form</td>
						</tr>
						<tr>
						  <td>Auditing Solutions</td>
							<td> </td>
							<td>FAQs</td>
						</tr>
						<tr>
						  <td>Auditing Management</td>
							<td> </td>
							<td> </td>
						</tr>
					</tbody>
			</table>
		</div>
			<div className="footerDiv footerContactGrid">
			<a href="http://linkedin.com" target="__blank" rel="noopener">
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
			<p>&copy;ReviewMate {new Date().getFullYear()}</p>
		</div>
		</footer>
	)
}

export default Footer
