
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
export default function BlogPost({ data }) {
  const post = data.allMdx;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
