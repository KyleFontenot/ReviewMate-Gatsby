import React, {useState, useEffect, useRef} from "react"
import SEO from "./seo"
// import { Link } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import BackToTop from "./BackToTop"


const Layout = ({ slug, children }) => {
  const hiderRef= useRef();
  const [layoutHider, setLayoutHider] = useState(false);


useEffect(() => {
  if (layoutHider){
    hiderRef.current.classList.add('showhider');
  }
  else {
    hiderRef.current.classList.remove('showhider');
  }
}, [layoutHider]);

  return (
    <div className="global-wrapper" >
      <SEO slug={slug} />
      <Header setLayoutHider={setLayoutHider} layoutHider={layoutHider}>
      </Header>

      <div id="layoutHider" ref={hiderRef} className="" onClick={() => {

        }}/>

      <main>
        {children}
      </main>

      <BackToTop/>
      <Footer/>
    </div>
  )
}

export default Layout
