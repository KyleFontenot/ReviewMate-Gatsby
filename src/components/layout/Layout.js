import * as React from "react"
// import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"

const Layout = ({ location, slug, children }) => {

  return (
    <div className="global-wrapper" >
      <Header slug={slug}/>
      <main>
        {children}
      </main>

      <BackToTop/>
      <Footer/>
    </div>
  )
}

export default Layout
