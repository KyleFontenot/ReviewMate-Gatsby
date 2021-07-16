import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/Hero"
import Block from "../../components/Block"
import Card from "../../components/Card"

const ProductsPage = () => {

	return (
		<Layout slug="Products">
			<h1>Product Categories</h1>

		<Hero bgimgUniqueName="analyzing-graph-growth.jpg">
		<div className="hero__text" style={{ backgroundColor: "rgba(0,0,0,0)", color: "white", minWidth: "70%" }}>
			<h2>Background</h2>
			<p>
				Pickerson Solutions LLC was formed in 2013 when a question was
				asked, "In this day and age of technology, why is our industry still
				using spreadsheets?" This question launched the development of
				ReviewMate by medical coding auditors for medical coding auditors.
			</p>
			<p>
				Pickerson Solutions' leadership team, with experience in middle
				revenue cycle management, software programming and development, is
				dedicated to working with our clients to advance quality of life for
				auditors by providing the most robust and innovative software in the
				revenue cycle market.
			</p>
		</div>
		</Hero>
		</Layout>
	)
}
export default ProductsPage;
