import React from "react"
import { Link } from 'gatsby'
import avatar from './bio/images/avatar.png'
import './header.styl'

export default class extends React.Component {
  constructor (props) {
    super(props)
    const { location } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = location.pathname === rootPath
    this.state = {headerVisible: false, isHome}
  }
  headerClassName = (headerVisible) => {
    const { isHome } = this.state
    if (isHome) {
      return `header ${headerVisible ? 'header-visible' : ''}`
    } else {
      return 'header header-visible'
    }
  }
  componentDidMount () {
    const { isHome } = this.state
    if (isHome) {
      let currentScrollHeight = window.pageYOffset
      window.onscroll = () => {
        currentScrollHeight = window.pageYOffset
        if(currentScrollHeight > 230){
          this.setState({headerVisible: true})
        }else{
          this.setState({headerVisible: false})
        }
      }
    }
  }
  componentWillUnmount () {
    window.onscroll = null
  }
  render () {
    const { isHome, headerVisible } = this.state
    return (
      <header className={this.headerClassName(headerVisible)}>
        <nav className="container">
          <Link className="header-logo" to="/" rel="home">
            <img src={avatar} alt="我的头像"/>
          </Link>
          <div className={`header-anchors ${isHome ? 'anchors-visible' : ''}`}>
            <a href="#projects">项目</a>
            <a href="#tools">工具</a>
            <a href="#creative">脑洞</a>
            <a href="#writing">写作</a>
            <a href="#painting">画画</a>
          </div>
          <div className="header-links">
            <Link to="/" rel="home">首页</Link>
            <Link to="/about" rel="about">关于我</Link>
          </div>
        </nav>
      </header>
    )
  }
}
