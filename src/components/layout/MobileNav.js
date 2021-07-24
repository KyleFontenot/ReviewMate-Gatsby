import React, { useState, useRef, useEffect } from "react"
// import SEO from "./seo"
import { Link } from "gatsby"

// const NavParent = styled.nav`
// 	position:fixed;
// 	top:0;
// 	right:0;
// 	left:auto;
// 	height: 100%;
// 	width:20rem;
// 	max-width:92%;
// 	background-color: #9a2a24;
// 	overflow:hidden;
// 	color:white;
// 	display:flex;
// 	align-items:flex-start;
// 	background:linear-gradient(to bottom right, #9a2a24, #8A2520);
// 	border-left:3px solid #bd8e8b;
// 	ul {
// 		position:absolute;
// 		top:2rem;
// 		left:0;
// 		width:20rem;
// 		margin:0 auto;
// 		font-size:1.3em;
// 		display:block;
// 		flex-direction:column;
// 		justify-content:center;
// 		align-items:flex-start;
//
// 		li, a {
// 			word-wrap: break-word;
// 			width:100%;
// 		}
// 	}
// 	& a {
// 		color:white;
// 		text-decoration:none;
// 	}
// `
const arrOfNavLinks = [
  "Auditing Tools",
  "Auditing Solutions",
  "Auditing Management",
  "About",
  "FAQs",
  "Contact",
]


const MobileNav = (props, ref, setLayoutHider, layoutHider) => {
  const mobileNavRef = useRef()
	const mobileIcon = useRef()
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    if (mobileMenu) {
      mobileNavRef.current.classList.add("showMenu");
			mobileIcon.current.classList.add("activatedHamburger");
    } else {
      mobileNavRef.current.classList.remove("showMenu");
			mobileIcon.current.classList.remove("activatedHamburger");
    }
  }, [mobileMenu]);

  return (

     <nav id="mobnavParent" ref={mobileNavRef} >
				<button
	        id="mobileIcon"
	        onClick={() => {
	          setMobileMenu(!mobileMenu);
						props.setLayoutHider(!props.layoutHider);
	        }}
					ref={mobileIcon}
	      >
	        <div className="hamburger"  />
	      </button>
        <ul>
          {arrOfNavLinks.map((item, index) => {
            return (
              <li className="mobnavli" key={index}>
                <Link
                  to={
                    item.includes("Auditing")
                      ? `/products/${item.replace(/\s/g, "-").toLowerCase()}`
                      : `/${item.toLowerCase()}`
                  }
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
  )
}

export default MobileNav
