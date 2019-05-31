import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.hero}>
      <h1 className={styles.title}>Hi, I'm Maxi Ferreira.</h1>
      <h2 className={styles.subtitle}>I'm a Software Engineer and Data Scientist.</h2>
    </div>
  </Layout>
)

export default IndexPage
