import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import FAQBlock from "../components/FAQBlock.jsx"
// import CascadeBlock from "../components/CascadeBlock"

const Index = () => {
  const datafaq = useStaticQuery(
    graphql`
      query MyFAQQuery {
        allContentfulFaq {
          edges {
            node {

              question
              answer {
                answer
                id
              }
              id
              order
            }
          }
        }
      }
    `
  );

  return (
    <Layout slug="FAQs">
      <h1>FAQs</h1>
      <Block row="column" className="faqsDiv">
        {datafaq.allContentfulFaq.edges.sort((a, b) => a.node.order - b.node.order).map(edge => {
          return (

            <FAQBlock key={edge.node.id} questionData={edge.node.question} answerData={edge.node.answer.answer} />
          )
        })}
      </Block>
    </Layout>
  )
}

export default Index;



// <div key={edge.node.id} className="faqEntry" onClick={() => {
//     // console.log(toggles[`${edge.node.id.slice(0, 4)}`]);
//   changeToggles(toggles[`${edge.node.id.slice(0, 4)}`] = !toggles[`${edge.node.id.slice(0, 4)}`]);
// }}>
//   <h3>{edge.node.question}</h3>
//   <p className={
//       toggles[`${edge.node.id.slice(0, 4)}`] ? `faqShow` : ''
//     }>{edge.node.answer.answer}</p>
// </div>
