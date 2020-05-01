import React from "react"
import { Link } from 'gatsby'
import cn from 'classnames'
import avatar from './images/avatar.png'
import github from './images/github.svg'
import figma from './images/figma.svg'
import wechat from './images/wechat.svg'
import mail from './images/mail.svg'
import rss from './images/rss.svg'
import menu from './images/menu.svg'
import close from './images/close.svg'
import qrcode from './images/qrcode.jpg'
import './header.styl'

let timeId

export default class Header extends React.Component {
  state = {
    mailActiveClass: '',
    socialVisible: false
  }
  onClickWechat = e => {
    e.preventDefault()
  }
  onClickWMail = e => {
    e.preventDefault()
    timeId && clearTimeout(timeId)
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', 'leadream4@gmail.com')
    document.body.appendChild(input)
    input.setSelectionRange(0, 9999)
    input.select()
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    }
    this.setState({mailActiveClass: 'active'})
    timeId = setTimeout(() => {
      this.setState({mailActiveClass: ''})
      clearTimeout(timeId)
    }, 2000)
    document.body.removeChild(input)
  }
  getLinkClass = link => {
    const { pathname } = this.props.location
    return (pathname===link || pathname===`${link}/`) ? 'active' : ''
  }
  toggleSocialVisible = () => {
    const { socialVisible } = this.state
    this.setState({socialVisible: !socialVisible})
  }
  render () {
    const { mailActiveClass, socialVisible } = this.state
    return (
      <header className="header">
        <nav className="container">
          <Link className="header-logo" to="/" rel="home">
            <img src={avatar} alt="我的头像"/>
          </Link>
          <div className={cn('header-links', {'header-links-hidden': socialVisible})}>
            <Link to="/" rel="home" className={this.getLinkClass('/')}>作品</Link>
            <Link to="/blog" rel="home" className={this.getLinkClass('/blog')}>文章</Link>
            <Link to="/cold" rel="cold" className={this.getLinkClass('/cold')}>-85°C</Link>
            <Link to="/about" rel="about" className={this.getLinkClass('/about')}>关于我</Link>
          </div>
          <div className="header-stretch"/>
          <div className={cn('header-social', {'header-social-visible': socialVisible})}>
            <a href="https://figma.com/@leadream" title="Figma" target="_blank" rel="noopener noreferrer">
              <img src={figma} alt="Figma"/>
            </a>
            <a href="https://github.com/leadream" title="Github" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="Github"/>
            </a>
            <a href="#mail" title="邮箱" target="_blank" rel="noopener noreferrer" onClick={this.onClickWMail}>
              <img src={mail} alt="邮箱"/>
              <div className={`social-mail ${mailActiveClass}`}>已复制邮箱</div>
            </a>
            <a href="#wechat" target="_blank" rel="noopener noreferrer" onClick={this.onClickWechat}>
              <img src={wechat} alt="微信"/>
              <div className="social-qrcode">
                <img src={qrcode} alt="Codesigner"/>
                <div>公众号：Codesigner</div>
              </div>
            </a>
            <a href="/rss.xml" title="RSS" target="_blank" rel="noopener noreferrer">
              <img src={rss} alt="RSS"/>
            </a>
          </div>
          <button className="header-mobile" onClick={this.toggleSocialVisible}>
            {
              socialVisible ?
              <img src={close} alt="Close"/> :
              <img src={menu} alt="Menu"/>
            }
          </button>
        </nav>
      </header>
    )
  }
}
