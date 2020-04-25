import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import cn from 'classnames'
import AV from 'leancloud-storage/dist/av-min'
import { relativeTime } from '../utils/date'
import SEO from '../components/seo'
import Temperature from '../components/cold/Temperature'
import Home from '../components/icons/Home'
import Comment from '../components/icons/Comment'
import Aperture from '../components/icons/Aperture'
import avatar from '../images/cold/avatar-playing.jpg'
import './cold.styl'

export default () => {
  const [posts, setPosts] = useState([])
  const [visibleId, setVisibleId] = useState()
  const [toastVisible, setToastVisible] = useState(false)
  const [toast, setToast] = useState('未完成功能')
  let timeId

  const initAv = () => {
    AV.init({
      serverURL: 'https://api.framercn.com',
      appId: 'kjcS77HUsT0IcrFubkguM4lF-gzGzoHsz',
      appKey: 'VFeBxiCvxWK6DtTRumxUVjSo'
    })
  }

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
    initAv()
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
        <img src={avatar} alt="头像"/>
        <div>你要觉得冷可以把空调制热打开</div>
      </div>
      <ul className="tl-items">
        {
          posts.length===0 ?
          <li className="tl-loading"><Aperture size={18}/> <span>降温中……</span></li> :
          posts.map(({objectId, content, temperature, createdAt}, index) =>
            <li className="tl-item" key={index}>
              <div className="item-avatar">
                <img src={avatar} alt="头像"/>
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
                        onColder={step => toggleToast(step>0 ? '多穿点儿' : '少穿点儿')}
                        onColdest={() => toggleToast('已经是最低温度')}
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
