import * as React from "react"
// import { Link } from "gatsby"
import Header from "./Header"

const Layout = ({ location, title, children }) => {

  return (
    <div className="global-wrapper" >
      <Header />
      <main>
        {children}
      </main>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
