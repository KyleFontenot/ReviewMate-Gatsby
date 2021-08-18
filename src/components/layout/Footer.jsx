import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialTwitterSVG from "../../images/twitter.svg"
import SocialFacebookSVG from "../../images/facebook-logo.svg"
import SocialLinkedInSVG from "../../images/linkedin-brands.svg"

const Footer = () => {
  return (
    <footer>
      <div className="footerRow">
        <div
          className="footerDiv"
          style={{
            maxWidth: "6rem",
          }}
        >
          <StaticImage
            src={
              `../../images/reviewmate-whitelogo.svg` ||
              `../../images/reviewmate-whitelogo.png`
            }
            alt="ReviewMate's logo of a magnifying glass with the written name."
            placeholder="tracedSVG"
            formats={["auto", "webp"]}
          />
        </div>
        <div
          className="footerDiv"
          style={{
            minWidth: "12rem",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Product Features</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/products/auditing-tools/">Auditing Tools</Link>
                </td>
                <td>
                  <Link to="/faqs">FAQs</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/products/auditing-solutions/">
                    Auditing Solutions
                  </Link>
                </td>
                <td>
                  <Link to="/about">About Us</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/products/auditing-management/">
                    Auditing Management
                  </Link>
                </td>
                <td>
                  <Link to="/contact/">Contact</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>




        <div className="footerDiv footerContactGrid">
          <div className="row row--row" style={{width: "100%", justifyContent:"space-around", marginBottom: "0"}}><a
            href="https://www.linkedin.com/company/reviewmate-powered-by-pickerson-solutions-llc/"
            target="__blank"
            rel="noopener"
          >
            {/*<StaticImage
              src="../../images/linkedin-brands.svg"
              transformOptions={{ fit: "cover" }}
              alt="LinkedIn icon"
              className="socialIcon"
            /> */}
						<SocialLinkedInSVG className="socialIcon"/>
          </a>
          <a
            href="https://www.facebook.com/ReviewMate1/"
            target="__blank"
            rel="noopener"
          >
            {/*<StaticImage
              src="../../images/facebook-logo.svg"
              transformOptions={{ fit: "cover" }}
              alt="Facebook icon"
              className="socialIcon"
              style={{ fill: "#ffffff" }}
            />*/}
						<SocialFacebookSVG className="socialIcon"/>
          </a>
					<a
            href="https://www.twitter.com/ReviewMatee/"
            target="__blank"
            rel="noopener"
          >
            {/*<StaticImage
              src="../../images/twitter.svg"
              transformOptions={{ fit: "cover" }}
              alt="Facebook icon"
              className="socialIcon"
              style={{ fill: "#ffffff" }}
            />*/}
						<SocialTwitterSVG className="socialIcon" style={{fill: "white"}}/>
          </a>
</div>


          <div className="row row--row" style={{width: "100%", justifyContent:"space-around", alignItems: "center"}}><a href="mailto:info@pickerson.com">
            <StaticImage
              src="../../images/envelope-solid.svg"
              transformOptions={{ fit: "cover" }}
              alt="Email icon"
              className="socialIcon"
            />
            <p>info@pickerson.com</p>
          </a>
          <a href="tel:+05890000111">
            <StaticImage
              src="../../images/phone-solid.svg"
              transformOptions={{ fit: "cover" }}
              alt="Email icon"
              className="socialIcon"
            />
            <p style={{minWidth:"6rem"}}>(702)723-7227</p>
          </a>
					</div>
        </div>
      </div>
      <div id="FooterToes">
        <p style={{ marginTop: "0.25rem" }}>
          &copy; Pickerson LLC {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
