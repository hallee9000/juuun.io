import React, { useEffect, useRef } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { loadImage } from "../../utils/helper"
import './clubhouse.styl'

export default props => {
  const canvas = useRef(null)
  const ctx = useRef(null)

  useEffect(() => {
    async function drawBackground() {
      ctx.current = canvas.current.getContext('2d')
      // 画背景
      const background = await loadImage('/app/clubhouse/clubhouse-background.png')
      ctx.current.drawImage(background, 0, 0, 750, 1624)
    }
    drawBackground()
  }, [canvas])

  const drawAvatar = async (avatar) => {
    ctx.current.drawImage(avatar, 662, 134, 60, 60);
    const mask = await loadImage('/app/clubhouse/avatar-mask.png')
    ctx.current.drawImage(mask, 660, 132, 64, 64);
    ctx.current.drawImage(avatar, 304, 372, 144, 144);
    const myMask = await loadImage('/app/clubhouse/me-mask.png')
    ctx.current.drawImage(myMask, 296, 364, 160, 160);
  }

  const drawSpeaker = async (avatar) => {
    ctx.current.drawImage(avatar, 76, 372, 144, 144);
    const mask = await loadImage('/app/clubhouse/host-mask.png')
    ctx.current.drawImage(mask, 68, 364, 160, 160);
  }

  const drawTopic = (text) => {
    // 写标题
    ctx.current.fillStyle = '#FFF'
    ctx.current.fillRect(68, 280, 610, 50)
    ctx.current.fillStyle = '#000'
    ctx.current.font = 'bold 36px "Inter", "PingFang SC"';
    ctx.current.fillText(text, 68, 320);
  }

  const handleChange = async e => {
    const { name, value, files } = e.target
    const src = files ? URL.createObjectURL(files[0]) : ''
    let avatar
    switch (name) {
      case 'topic':
        drawTopic(value)
        break
      case 'host':
        avatar = await loadImage(src)
        await drawSpeaker(avatar)
        break
      case 'me':
        avatar = await loadImage(src)
        await drawAvatar(avatar)
        break
      default:
        return;
    }
  }

  return (
    <Layout location={props.location}>
      <SEO title="Clubhouse room 截图"/>
      <div className="clubhouse">
        <div className="clubhouse-container container">
          <form className="clubhouse-form">
            <label>
              <b>主题</b>
              <input name="topic" onChange={handleChange}/>
            </label>
            <label>
              <b>主持人</b>
              <input type="file" name="host" onChange={handleChange}/>
            </label>
            <label>
              <b>我</b>
              <input type="file" name="me" onChange={handleChange}/>
            </label>
          </form>
          <div className="clubhouse-preview">
            <canvas ref={canvas} width="750px" height="1624px"/>
          </div>
        </div>
      </div>
    </Layout>
  )
}
