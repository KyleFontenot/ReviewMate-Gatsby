import * as React from "react"
import {Link} from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Block from "../components/Block"
import CascadeBlock from "../components/CascadeBlock"
import LandingSpace from "../components/LandingSpace"

const Index = () => {
  const imagesURL = "../images"
  return (
    <Layout>
      <LandingSpace />
      <Block direction="row" h2="Our Core Features">
        <div
          className="column padded ta-center"
          style={{
            flex: "1 1 30%",
          }}
        >
          <StaticImage
            src={`${imagesURL}/corefeature1.png`}
            placeholder="tracedSVG"
            alt="Icon of a chesspiece and a datasheet"
            height={150}
            layout="fixed"
            style={{
              margin: "0 auto 2rem",
            }}
          />
          <h3> Centralized Platform </h3>
          <p className="ta-left">
            ReviewMate provides a robust and innovative one - stop - shop where
            coding audits are performed and stored in a transparent
            manner.Because ReviewMate is web - based, it can be accessed 24/7
            year - round.
          </p>
        </div>
        <div
          className="column padded ta-center"
          style={{
            flex: "1 1 30%",
          }}
        >
          <StaticImage
            src={`${imagesURL}/corefeature2.png`}
            placeholder="tracedSVG"
            alt="Icon of a chesspiece and a datasheet"
            layout="fixed"
            height={150}
            style={{
              margin: "0 auto 2rem",
            }}
          />
          <h3> Powerful tools </h3>
          <p className="ta-left">

            Features include integration of data, sample selection,
            randomization, scheduling, audit management, communication options,
            and multiple robust reporting tools.ReviewMate was created by
            auditors for auditors.
          </p>
        </div>
        <div
          className="column padded ta-center"
          style={{
            flex: "1 1 30%",
          }}
        >
          <StaticImage
            src={`${imagesURL}/corefeature3.png`}
            placeholder="tracedSVG"
            alt="Icon of a chesspiece and a datasheet"
            height={150}
            layout="fixed"
            style={{
              margin: "0 auto 2rem",
            }}
          />
          <h3> Security </h3>
          <p className="ta-left">
            Our network security standards and procedures give you the
            confidence that your data and analytics are running on a highly
            secure environment.
          </p>
        </div>
      </Block>


      <Block row="row--row" h2="At a glance" style={{borderBottom:'2px solid #9a2a24'}}/>
        <CascadeBlock>
          <div
            className="column cascadeBlock__img"
            style={{
              marginTop: "3rem",
            }}
          >
            <StaticImage
              src="../images/Streamline.png"
              placeholder="tracedSVG"
              layout="constrained"
              alt="Two people discussing statistics."
              style={{
                maxWidth:'36rem',
                margin:'0 auto',
                width:'100%'
              }}
            />
          </div>
          <div className="column cascadeBlock__text">
            <h3> Streamline Reviews </h3>
            <ul>
              <li> Upload coded data electronically or manually </li>
              <li> Choose custom or randomized samples for auditing </li>
              <li> Capture findings in a centralized web - based format </li>
              <li> Analyze cases with edits and analysis tools </li>
              <li>
                Organize and categorize findings using reason codes and citing
                source documents
              </li>
              <li>

                Calculate reimbursement changes according to findings entered
              </li>
            </ul>
          </div>
        </CascadeBlock>

        <CascadeBlock>
          <div className="column cascadeBlock__img" >
            <StaticImage
              src="../images/Communicate.png"
              placeholder="tracedSVG"
              layout="constrained"
              alt="Two people discussing statistics."
              style={{
                maxWidth:'36rem',
                margin:'0 auto',
                width:'100%'
              }}
            />
          </div>
          <div className="column cascadeBlock__text">
            <h3> Communicate Findings </h3>
            <ul>
              <li>
                Share findings with coders within software and / or email
              </li>
              <li>
                Allow coders to respond in a user - friendly manner
              </li>
              <li>
                Reconcile responses to assure all cases are addressed
              </li>
              <li> Access findings 24/7 </li>
            </ul>
          </div>
        </CascadeBlock>



        <CascadeBlock>
          <div className="column cascadeBlock__img">
            <StaticImage
              src="../images/Simplify.png"
              placeholder="tracedSVG"
              layout="constrained"
              alt="Two people discussing statistics."
              style={{
                maxWidth:'36rem',
                margin:'0 auto',
                width:'100%'
              }}
            />
          </div>
          <div className="column cascadeBlock__text">
            <h3> Simplify Reports </h3>
            <ul>
              <li> Choose from a variety of standard reports available </li>
              <li> Create custom report templates </li>
              <li>

                Calculate accuracy rates automatically on an aggregate level,
                for each element, and by coder
              </li>
              <li> Analyze historical statistics by coder. </li>
              <li> Customize reports based on your clients needs </li>
            </ul>
          </div></CascadeBlock>


        <CascadeBlock>
          <div className="column cascadeBlock__img order1">
            <StaticImage
              src="../images/Accountability.png"
              placeholder="tracedSVG"
              layout="constrained"
              alt="Two people discussing statistics."
              style={{
                maxWidth:'36rem',
                margin:'0 auto',
                width:'100%'
              }}
            />
          </div>
          <div className="column cascadeBlock__text">
            <h3> Provide Accountability </h3>
            <ul>
              <li> Log in 24/7 to view accuracy rates and findings </li>
              <li>

                Provide transparency by granting access to anyone in your
                organization
              </li>
              <li> Reconcile coder responses easily and quickly </li>
              <li> Track and oversee review progress </li>
            </ul>
          </div>
      </CascadeBlock>
      <Block direction="column" style={{
          textAlign:'center',
        }}>
          <p style={{
              margin: '0 auto 2rem',
              maxWidth:'40rem',
              backgroundColor:'#f3f3f3',
              borderRadius:'20px',
              padding:'1.5rem 2.5rem',
              color:'#444'

            }}>Our services are manicured for your use, so connect with us for questions or applications. We're excited to hear from you!</p>
          <Link to="/contact" style={{
              margin: '0 auto'
            }}><button className="button button--pert" >Contact us</button></Link>
      </Block>
    </Layout>
  )
}

export default Index
