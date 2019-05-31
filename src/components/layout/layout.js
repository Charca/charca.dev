import React from "react"
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import styles from "./layout.module.scss"
import "@csstools/normalize.css"
import "./_base.scss"

const Layout = ({ active, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.layout}>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display&display=swap" rel="stylesheet" />
        </Helmet>
        <Header
          active={active}
          siteTitle={data.site.siteMetadata.title}
        />
        <main className={`container ${styles.main}`}>{children}</main>
        <footer className={`container ${styles.footer}`}>
          © {new Date().getFullYear()} Maxi Ferreira.
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
