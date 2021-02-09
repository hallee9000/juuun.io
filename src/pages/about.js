import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portrait from "../components/portrait/index"
import './about.styl'

export default props =>
  <Layout location={props.location}>
    <SEO title="关于我"/>
    <div className="layout-about container">
      <Portrait/>
      <section className="about-section">
        <h3 className="section-label">关于我</h3>
        <p>我是一名从前端开发转行而来的产品设计师，平时喜做一些无用而<del>有趣</del>的东西。<b>我对设计系统及设计交付到开发颇有研究，对工具类产品保持着极大的兴趣。</b></p>
        <p>上面自画像里有彩蛋。</p>
      </section>
    </div>
  </Layout>
