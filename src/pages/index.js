import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>سلام دوستان</h1>
    <p>به وب سایت تکنلوژی برترخوش آمدید.</p>
    <p>سعی داریم در این وب سایت از تکنولوژی های روز را برای شما دوستان مورد برسی قرار دهیم.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">حرکت به صفحه 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
