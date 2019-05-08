import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        `ronnie`,
        `villarini`,
        `developer`,
        `engineer`,
      ]}
    />
    <h1>Ronnie Villarini</h1>
    <p>Full-Stack developer living in a JavaScript paradise.</p>
  </Layout>
)

export default IndexPage
