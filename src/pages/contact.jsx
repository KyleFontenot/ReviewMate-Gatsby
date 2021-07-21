import * as React from "react"
// import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"
import Block from "../components/Block"
import FormBlock from "../components/FormBlock/FormBlock"
import Hero from "../components/Hero"


const ContactPage = () => {
  return (
    <Layout slug="Contact">

      <Hero bgimgUniqueName="grid4.png">
        <FormBlock />
      </Hero>
      <Block row="column">
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "40rem",
            width: "70%",
          }}
        >
          One of us will get right back to you. Our software is flexible for
          many different needs and uses, so the best way to get more of idea of
          the product is to simply connect with us.
        </p>
        <Link
          to="/faqs"
          style={{
            margin: "0 auto",
          }}
        >
          <button className="button button--pert">FAQs</button>
        </Link>
      </Block>
    </Layout>
  )
}

export default ContactPage
