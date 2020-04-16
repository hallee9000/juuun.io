import React, { useState } from "react"
import { Link } from 'gatsby'
import cn from "classnames"
import SEO from "../components/seo"
import contents from './cold.json'
import './cold.styl'

export default () => {
  const [visibleId, setVisibleId] = useState()
  const [toastVisible, setToastVisible] = useState(false)
  let timeId

  const handleDismiss = () => {
    setVisibleId()
  }
  const toggleToastVisible = () => {
    setToastVisible(true)
    timeId && clearTimeout(timeId)
    timeId = setTimeout(() => {
      setToastVisible(false)
    }, 1600)
  }
  return (
    <div className="layout-cold container" onClickCapture={handleDismiss}>
      <SEO title="-85°C | 冷笑话集合"/>
      <div className="tl-cover">
        <Link to="/" rel="home" className="cover-home">Home</Link>
        <span>Juuun</span>
        <img src="/cold/avatar-playing.jpg" alt="头像"/>
        <div>你要觉得冷可以把空调制热打开</div>
      </div>
      <ul className="tl-items">
        {
          contents.map(({content, date}, index) =>
            <li className="tl-item" key={index}>
              <div className="item-avatar">
                <img src="/cold/avatar-playing.jpg" alt="头像"/>
              </div>
              <div className="item-content">
                <div className="content-nickname">Juuun</div>
                <pre className="content-text">{ content }</pre>
                <div className="content-actions">
                  <span className="actions-time">{ date }</span>
                  <span className="stretched-box"/>
                  <button onClick={() => setVisibleId(index)}>
                    <div className="actions-dot"/>
                    <div className="actions-dot"/>
                    <div className={cn('actions-overlay', {'actions-overlay-stretched': visibleId===index})}>
                      <span
                        className="overlay-action"
                        onKeyDown={toggleToastVisible}
                        onClick={toggleToastVisible}
                        role="button"
                        tabIndex={index}
                      >
                        <img src="/cold/heartlove.png" alt="赞"/>
                        <span>赞</span>
                      </span>
                      <span
                        className="overlay-action"
                        onKeyDown={toggleToastVisible}
                        onClick={toggleToastVisible}
                        role="button"
                        tabIndex={index}
                      >
                        <img src="/cold/comment.png" alt="评论"/>
                        <span>评论</span>
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </li>
          )
        }
      </ul>
      <div className={cn('tl-toast', {'tl-toast-active': toastVisible})}>未完成功能</div>
    </div>
  )
}
