import React from "react"
import Layout from "../components/layout"
import Portrait from "../components/portrait/index"
import './about.styl'

export default props =>
  <Layout location={props.location}>
    <div className="layout-about container">
      <Portrait/>
      <section className="about-section about-base">
        <h3 className="section-label">基本信息</h3>
        <div className="section-content">
          Jun / 深圳 / leadream4@qq.com
        </div>
      </section>
      <section className="about-section about-education">
        <h3 className="section-label">教育经历</h3>
        <div className="section-content">2010.8-2014.7 本科 / 计算机科学与技术</div>
      </section>
      <section className="about-section about-work">
        <h3 className="section-label">工作经历</h3>
        <div className="section-content">
          <div>2018.7-至今 / CODING / 产品经理</div>
          <div>2018.4-2018.7 / CODING / 用户体验设计师</div>
          <div>2017.3-2018.4 / crazybaby / 前端开发</div>
          <div>2014.9-2016.7 / 乐童音乐 / 前端开发&产品设计</div>
        </div>
      </section>
    </div>
  </Layout>
