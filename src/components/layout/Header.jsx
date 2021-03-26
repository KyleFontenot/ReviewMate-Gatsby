import React, { useState, useRef} from "react"
import SEO from "./seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({slug}) => {
	const dropdownProductsRef = useRef();
	const dropdownContactsRef = useRef();
	const [menuProducts, setMenuProducts] = useState(false);
	const [menuContacts, setMenuContacts] = useState(false);
  return (
    <header>
      <SEO slug={slug}/>
      <nav>
				<Link to="/" style={{
						alignSelf: 'flex-start'
					}}>
	        <StaticImage
	          src="../../images/ReviewMate-main.png"
	          alt="ReviewMate's logo of a magnifying glass with the written name."
	          placeholder="tracedSVG"
	          formats={["auto", "webp"]}
	          transformOptions={{ fit: "cover" }}
	          style={{
	            maxWidth: "20rem",
							position:'relative',
							left:0
	          }}
						id="mainLogo"
	        />
	      </Link>
        <ul style={{
						alignSelf: 'flex-end',
						flex:1
					}}>
          <li className="navli" >
            <Link to="#"
							onMouseEnter={()=> setMenuProducts(true)}
							onMouseLeave={()=> setMenuProducts(false)}>
							Products</Link>
						<ul className={`dropdownUl ${menuProducts ? 'show': ' '}`}
						onMouseEnter={()=> setMenuProducts(true)}
						onMouseLeave={()=> setMenuProducts(false)}
						  ref={dropdownProductsRef}
							>
              <li>
                <Link to="/products/auditingtools">Auditing Tools</Link>
              </li>
              <li>
                <Link to="/products/auditingsolutions">Auditing Solutions</Link>
              </li>
              <li >
                <Link to="/products/auditingmanagement">Auditing Management</Link>
              </li>
            </ul>
          </li>
          <li className="navli">
            <Link to="/about">About</Link>
          </li>
					<li className="navli">
            <Link to="/faqs">FAQs</Link>
          </li>
          <li className="navli">
            <Link to="/contact"
							onMouseEnter={()=> setMenuContacts(true)}
							onMouseLeave={()=> setMenuContacts(false)}
							>Contact</Link>
						<ul className={`dropdownUl ${menuContacts ? 'show': ' '}`}
								onMouseEnter={()=> setMenuContacts(true)}
								onMouseLeave={()=> setMenuContacts(false)}
								  ref={dropdownContactsRef}
									>
		              <li>
		                <Link to="/faqs">FAQs</Link>
		              </li>
		              <li>
		                <Link to="/contact">Contact</Link>
		              </li>
		            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
