import React from "react"
import { Link } from 'gatsby'
import './footer.styl'

export default () =>
  <footer className="footer container">
    <div className="footer-wrapper">
      <div>Copyright © {new Date().getFullYear()} Jun, Built with&nbsp;<a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a></div>
      <span className="stretched-box"/>
      <Link to="/" className="footer-link">作品</Link>
      <Link to="/blog" className="footer-link">文章</Link>
      <Link to="/about" className="footer-link">关于我</Link>
    </div>
  </footer>