import React, { useState, useRef } from "react"
import SEO from "./seo"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import MobileNav from "./MobileNav"

const Header = (props, { slug} ) => {
  const dropdownProductsRef = useRef()

  const [menuProducts, setMenuProducts] = useState(false)
  // const [menuContacts, setMenuContacts] = useState(false)

  return (
    <header id="header">
      <SEO slug={slug} />
      <nav>
        <Link
          to="/"
          style={{
            alignSelf: "flex-start"
          }}
          id="mainLogo"
        >
          <StaticImage
            src="../../images/ReviewMate-main.png"
            alt="ReviewMate's logo of a magnifying glass with the written name."
            placeholder="tracedSVG"
            formats={["auto", "webp"]}
            transformOptions={{ fit: "cover" }}

          />
        </Link>
        <ul
          style={{
            alignSelf: "flex-end",
            flex: 1,
          }}
          id="desktopNav"
        >
          <li className="navli">
            <Link
              to="#"
              onMouseEnter={() => setMenuProducts(true)}
              onMouseLeave={() => setMenuProducts(false)}
            >
              Products
            </Link>
            <ul
              className={`dropdownUl ${menuProducts ? "show" : " "}`}
              onMouseEnter={() => setMenuProducts(true)}
              onMouseLeave={() => setMenuProducts(false)}
              ref={dropdownProductsRef}
            >
              <li>
                <Link to="/products/auditingtools">Auditing Tools</Link>
              </li>
              <li>
                <Link to="/products/auditingsolutions">Auditing Solutions</Link>
              </li>
              <li>
                <Link to="/products/auditingmanagement">
                  Auditing Management
                </Link>
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
            <Link
              to="/contact"
              // onMouseEnter={() => setMenuContacts(true)}
              // onMouseLeave={() => setMenuContacts(false)}
            >
              Contact
            </Link>
            {/*<ul
              className={`dropdownUl ${menuContacts ? "show" : " "}`}
              onMouseEnter={() => setMenuContacts(true)}
              onMouseLeave={() => setMenuContacts(false)}
              ref={dropdownContactsRef}
            >
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>*/}
          </li>
        </ul>
      </nav>
      <MobileNav {...props} setLayoutHider={props.setLayoutHider} layoutHider={props.layoutHider} />

    </header>
  )
}

export default Header
