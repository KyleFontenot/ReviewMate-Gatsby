import * as React from "react"
// import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import { Link } from "gatsby"
import Block from "../components/Block"
import FormBlock from "../components/FormBlock/FormBlock"
import Hero from "../components/Hero"
import santizeSlug from "../components/santizeSlug"

// .pattern-grid-md {
//   background-image: linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px);
//   background-size: 25px 25px;
// }

const ContactPage = () => {
  const slug = "Contact";
  return (
    <Layout slug={slug} pathName={`${santizeSlug(slug)}`}>

      <Hero>
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
        >We will get right back to you. Our software is flexible for many different needs and uses, so the best way to get more of an idea of our software’s capabilities is the simply connect with us.</p>
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
