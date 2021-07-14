import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Hero from "../components/Hero"
import Block from "../components/Block"
import Card from "../components/Card"
import { StaticImage } from "gatsby-plugin-image"
// import FAQBlock from "../components/FAQBlock.jsx"
// import CascadeBlock from "../components/CascadeBlock"

const Index = () => {


  return (
    <Layout slug="About">

      <h1>About Us</h1>
      <Hero bgimgUniqueName="analyzing-graph-growth.jpg" >
        <div className="hero__text" style={{ backgroundColor: "white" }}>
          <h2>Background</h2>
          <p>Pickerson Solutions LLC was formed in 2013 when a question was asked, "In this day and age of technology, why is our industry still using spreadsheets?" This question launched the development of ReviewMate by medical coding auditors for medical coding auditors.</p>

          <p>Pickerson Solutions' leadership team, with experience in middle revenue cycle management, software programming and development, is dedicated to working with our clients to advance quality of life for auditors by providing the most robust and innovative software in the revenue cycle market.</p>
        </div>
      </Hero>
      <Block row="">

        <Card>
          <StaticImage
            src="../images/greg.jpg"
            placeholder="tracedSVG"
            alt="Photo of Greg Thompson"
            width={150}
            height={150}
            layout="fixed"
           className="card__image"
          />
          <h2>Greg Thompson</h2>
          <h3>CEO</h3>
          <p>With more than 25 years in the medical software design and development, Mr. Thompson has launched and managed several businesses over the years. With a degree in business management and computer information systems, he is a key contributor to the technology and design of the ReviewMate application. Mr. Thompson has worked with many large hospitals and healthcare systems over the years and is a key contributor in working with potential clients, product demonstrations, and contract negotiations.</p>
        </Card>

        <Card>
          <StaticImage
            src="../images/karen.jpg"
            placeholder="tracedSVG"
            alt="Photo of Karen Pickering"
            layout="fixed"
            width={150}
            height={150}
            className="card__image"
          />
          <h2>Karen Pickering - RHIT, CCS</h2>
          <h3>CCO</h3>
          <p>Ms. Pickering received her RHIT (Registered Health Information Technician) certificate in 1990 and her CCS (Certified Coding Specialist) in 1994. She is proficient in ICD-10-CM, ICD-9-CM and CPT/HCPCS coding and has 32 years' experience. Considered an expert in coding, auditing, and mentoring to healthcare facilities and Health Information Management professionals, she performs comprehensive coding reviews to assure correct and compliant coding practices in a multitude of healthcare settings including acute inpatient and outpatient, rehabilitation, partial hospitalization and risk adjustment. Karen also helped create, and is the content expert for, the auditing software program ReviewMate by Pickerson Solutions, LLC.</p>
        </Card>

        <Card>
          <StaticImage
            src="../images/faris.jpg"
            placeholder="tracedSVG"
            alt="Photo of Faris Zuriekat"
            layout="fixed"
            width={150}
            height={150}
            className="card__image" />
          <h2>Faris Zuriekat</h2>
          <h3>CIO</h3>
          <p>Innovative and entrepreneurial technology leader with over fifteen years’ experience in Information Technology, Mr. Zuriekat specializes in software development, security, and architecture, and has undertaken critical responsibilities, such as, establishing ReviewMate's technical vision and leading all aspects of software development according to strategic direction and growth objectives. Faris's knowledge in computer science allows him to perform complex analyses and designs of software applications and architecture. Prior to joining Pickerson Solutions, he held various software development leadership roles in healthcare and global GIA.</p>
        </Card>
      </Block>
      <Block>
        <Card>
          <h2>Vision</h2>
          <p>To improve the life of medical coding auditors through compassion and innovation</p>
        </Card>
        <Card>
          <h2>Values</h2>
          <ul>
            <li>Respect For People</li>
            <li>Teamwork</li>
            <li>Efficiency</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Stewardship</li>
            <li>Diversity</li>
          </ul>
        </Card>
        <Card>
          <h2>Mission</h2>
          <p>Our Mission is to be the most advanced, robust and intelligent product that exists in the healthcare revenue lifecycle market by delivering on our clients’ needs, improving their effectiveness and efficiency though innovation and committed teamwork, while maintaining our uncompromising principles</p>
        </Card>
      </Block>

    </Layout>
  )
}

export default Index
