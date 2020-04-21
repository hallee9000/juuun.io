import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import cn from "classnames"
import AV from 'leancloud-storage'
import { relativeTime } from '../utils/date'
import SEO from "../components/seo"
import Home from "../components/icons/Home"
import Temperature from "../components/cold/Temperature"
import Comment from "../components/icons/Comment"
import './cold.styl'

AV.init({
  serverURL: 'https://api.framercn.com',
  appId: 'kjcS77HUsT0IcrFubkguM4lF-gzGzoHsz',
  appKey: 'VFeBxiCvxWK6DtTRumxUVjSo'
})

export default () => {
  const [posts, setPosts] = useState([])
  const [visibleId, setVisibleId] = useState()
  const [toastVisible, setToastVisible] = useState(false)
  const [toast, setToast] = useState('未完成功能')
  let timeId

  const handleDismiss = () => {
    setVisibleId()
  }

  const toggleToast = (text='未完成功能') => {
    setToast(text)
    setToastVisible(true)
    timeId && clearTimeout(timeId)
    timeId = setTimeout(() => {
      setToastVisible(false)
    }, 1600)
  }

  useEffect(() => {
    const query = new AV.Query('MyNewTimeline')
    query.equalTo('isValid', true)
    query.descending('createdAt')
    query.find().then(results => {
      const timelines = results.map(r => r.toJSON())
      setPosts(timelines)
    })
  }, [])

  return (
    <div className="layout-cold container" onClickCapture={handleDismiss}>
      <SEO title="-85°C | 冷笑话集合"/>
      <div className="tl-cover">
        <Link to="/" rel="home" className="cover-home"><Home size={24}/></Link>
        <span>Juuun</span>
        <img src="/cold/avatar-playing.jpg" alt="头像"/>
        <div>你要觉得冷可以把空调制热打开</div>
      </div>
      <ul className="tl-items">
        {
          posts.map(({objectId, content, temperature, createdAt}, index) =>
            <li className="tl-item" key={index}>
              <div className="item-avatar">
                <img src="/cold/avatar-playing.jpg" alt="头像"/>
              </div>
              <div className="item-content">
                <div className="content-nickname">Juuun</div>
                <pre className="content-text">{ content }</pre>
                <div className="content-actions">
                  <span className="actions-time">{ relativeTime(createdAt) }</span>
                  <span className="stretched-box"/>
                  <button onClick={() => setVisibleId(index)}>
                    <div className="actions-dot"/>
                    <div className="actions-dot"/>
                    <div className={cn('actions-overlay', {'actions-overlay-stretched': visibleId===index})}>
                      <Temperature
                        postId={objectId}
                        defaultTemperature={temperature}
                        index={index}
                        onColder={() => toggleToast('多穿点儿')}
                      />
                      <span
                        className="overlay-action"
                        onKeyDown={() => toggleToast()}
                        onClick={() => toggleToast()}
                        role="button"
                        tabIndex={index}
                      >
                        <Comment size={18}/>
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
      <div className={cn('tl-toast', {'tl-toast-active': toastVisible})}>{toast}</div>
    </div>
  )
}
