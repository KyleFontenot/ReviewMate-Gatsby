import * as React from "react"
// import {StaticImage} from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
// import Block from "../components/Block"
import FormBlock from "../components/FormBlock/FormBlock"
import Hero from "../components/Hero"
import "../components/FormBlock/FormBlock.scss"


const ContactPage = () => {
	return (
		<Layout slug="Contact Us">
			<Hero bgimgUniqueName="grid4.png">
				<FormBlock className="formBlock"/>

			</Hero>
			<p>hi</p>
		</Layout>
	)
}

export default ContactPage
