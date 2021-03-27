import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"

const Index = () => {
  return (
    <Layout slug="Thank you!">
      <h1>Thank you!</h1>
      <Block row="column" style={{
				flexDirection:"column"
			}}>
			<div style={{
				maxWidth:'40rem',
				textAlign:'center',
				margin:'0 auto'
			}}>
			<p style={{ fontSize:'1.2rem' }}>One of our team members will email you back soon.</p>
			<p style={{ fontSize:'1.2rem' }}>In the meantime, check out our FAQs, or our backgrounds. </p> <br/>
			<Link to="/faqs"><button className="button">FAQs</button></Link>
			<Link to="/about"><button className="button">About</button></Link>
			</div>


      </Block>
    </Layout>
  )
}

export default Index;
