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
        <p>我是一名从前端开发转行而来的产品设计师，平时喜做一些无用而<del>有趣</del>的东西，对工具类产品保持着极大的兴趣。<br/><br/><b>目前我正在寻找一份交互设计的工作，如果您正好也在寻找一位设计师可以联系我。</b></p>
      </section>
      <section className="about-section about-base">
        <h3 className="section-label">基本信息</h3>
        <div className="section-content">
          深圳 / leadream4@gamil.com
        </div>
      </section>
      <section className="about-section about-education">
        <h3 className="section-label">教育经历</h3>
        <div className="section-content">2010.8-2014.7 本科 / 计算机科学与技术</div>
      </section>
      <section className="about-section about-work">
        <h3 className="section-label">工作经历</h3>
        <div className="section-content">
          <div>2018.7-2020.1.1 / CODING / 产品经理</div>
          <div>2018.4-2018.7 / CODING / 用户体验设计师</div>
          <div>2017.3-2018.4 / crazybaby / 前端开发</div>
          <div>2014.9-2016.7 / 乐童音乐 / 前端开发&产品设计</div>
        </div>
      </section>
    </div>
  </Layout>
