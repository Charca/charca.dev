import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'

const getActiveClassName = (active, section) => {
  return (active === section) ? 'is-active' : ''
}

const Header = ({ active, siteTitle }) => (
  <header className={styles.header}>
    <div className={`container ${styles.container}`}>
      <Link to="/" className={styles.logo}>
        {siteTitle}
      </Link>
      <ul className={styles.navigation}>
        <li>
          <Link to="/essays" className={getActiveClassName(active, 'essays')}>
            Essays
          </Link>
        </li>
        <li>
          <Link to="/about" className={getActiveClassName(active, 'about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/">
            <span role="img" aria-label="dark mode">🌙</span>
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
