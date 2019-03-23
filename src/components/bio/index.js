import React from 'react'
import avatar from './images/avatar.png'
import wechat from './images/wechat.svg'
import qrcode from './images/qrcode.jpg'
import github from './images/github.svg'
import jike from './images/jike.svg'
import mail from './images/mail.svg'
import './bio.styl'

let timeId

class Bio extends React.Component {
  state = {mailActiveClass: ''}
  onClickWechat = e => {
    e.preventDefault()
  }
  onClickWMail = e => {
    e.preventDefault()
    timeId && clearTimeout(timeId)
    const input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')
    input.setAttribute('value', 'leadream4@qq.com')
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
  render () {
    const { mailActiveClass } = this.state
    const { hasAvatar, intro } = this.props
    return (
      <div className="layout-bio container">
        {
          hasAvatar &&
          <div className="bio-avatar">
            <img src={avatar} alt="头像"/>
          </div>
        }
        <div className="bio-social">
          <a href="#wechat" target="_blank" rel="noopener noreferrer" onClick={this.onClickWechat}>
            <img src={wechat} alt="微信"/>
            <div className="social-qrcode">
              <img src={qrcode} alt="Codesigner"/>
              <div>公众号：Codesigner</div>
            </div>
          </a>
          <a href="https://github.com/leadream" title="Github" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github"/>
          </a>
          <a href="https://web.okjike.com/user/d1463ce6-2b40-4537-87fe-e50c02a3e9b9" title="即刻" target="_blank" rel="noopener noreferrer">
            <img src={jike} alt="即刻"/>
          </a>
          <a href="#mail" title="邮箱" target="_blank" rel="noopener noreferrer" onClick={this.onClickWMail}>
            <img src={mail} alt="邮箱"/>
            <div className={`social-mail ${mailActiveClass}`}>已复制邮箱</div>
          </a>
        </div>
        <div className="bio-intro">
          {intro || '嗨！我是产品设计师 Jun。不知道该如何介绍自己，往下翻看我的作品了解我吧。'}
        </div>
      </div>
    )
  }
}
export default Bio
