import React from "react"
import { Link, withPrefix } from 'gatsby'
import './header.styl'

export default class extends React.Component {
  constructor (props) {
    super(props)
    const { location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = location.pathname === rootPath
    const isAbout = location.pathname === `${rootPath}about`
    const isPortfolio = /^\/portfolio/.test(location.pathname)
    this.state = {isHome, isPortfolio, isAbout, portfolioVisible: false}
  }
  componentDidMount () {
    const { isPortfolio } = this.state
    const canViewPortfolio = localStorage.getItem('portfolio')
    if (canViewPortfolio || isPortfolio) {
      this.setState({portfolioVisible: true})
    }
  }
  render () {
    const { isHome, isPortfolio, isAbout, portfolioVisible } = this.state
    return (
      <header className="header">
        <nav className="container">
          <Link className="header-logo" to="/" rel="home">
            <img src={withPrefix('/avatar.png')} alt="我的头像"/>
          </Link>
          <div className="stretched-box"/>
          <div className="header-links">
            <Link to="/" rel="home" className={isHome ? 'active' : ''}>首页</Link>
            {
              portfolioVisible &&
              <Link to="/portfolio" rel="portfolio" className={isPortfolio ? 'active' : ''}>作品集</Link>
            }
            <Link to="/about" rel="about" className={isAbout ? 'active' : ''}>关于我</Link>
          </div>
        </nav>
      </header>
    )
  }
}
