import React, { useState } from "react"
import { Link } from "gatsby"
import MobileNav from "./MobileNav"
import MainLogoSVG from "../../images/reviewmate-mainlogo.svg"

const Header = props => {
  const dropdownProductsRef = React.useRef(0)
  const dropdownLi = React.useRef(0)

  const [menuProducts, setMenuProducts] = useState(false)

  return (
    <header id="header">
      <nav role="navigation" aria-label="Main">
        <Link
          to="/"
          style={{
            alignSelf: "flex-start",
          }}
          id="mainLogo"
        >
          <MainLogoSVG></MainLogoSVG>
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
              to="/products/"
              onMouseEnter={() => setMenuProducts(true)}
              onMouseLeave={() => setMenuProducts(false)}
              onFocus={() => setMenuProducts(true)}
              onBlur={() => setMenuProducts(false)}
              ref={dropdownLi}
            >
              Products
            </Link>
            <ul
              className={`dropdownUl ${menuProducts ? "show" : " "}`}
              onMouseEnter={() => setMenuProducts(true)}
              onMouseLeave={() => setMenuProducts(false)}
              onFocus={() => setTimeout(() => setMenuProducts(true), 100)}
              onBlur={() => setTimeout(() => setMenuProducts(true), 100)}
              ref={dropdownProductsRef}
            >
              <li>
                <Link to="/products/auditing-tools/">Auditing Tools</Link>
              </li>
              <li>
                <Link to="/products/auditing-solutions/">
                  Auditing Solutions
                </Link>
              </li>
              <li>
                <Link to="/products/auditing-management/">
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
              to="/contact/"
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
      <MobileNav
        {...props}
        setLayoutHider={props.setLayoutHider}
        layoutHider={props.layoutHider}
      />
    </header>
  )
}

export default Header
