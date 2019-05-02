import React from "react"
import { Link, withPrefix } from "gatsby"
import Layout from "../../components/layout"
import SEO from '../../components/seo'
import './style.styl'

const sections = [
  {
    title: '项目',
    brief: '我在工作中做的一些项目。',
    posts: [
      {
        title: 'Musikit 设计规范',
        description: '以工程师的身份推动设计规范建立。',
        link: '/portfolio/musikit',
        cover: '/portfolio/musikit.png'
      }, {
        title: 'SaaS 产品用户引导',
        description: '设计一个完整的用户引导流程。',
        link: '/portfolio/onboarding',
        cover: '/portfolio/onboarding.jpg'
      }, {
        title: 'Cloud Studio 控制中心',
        description: '控制中心整体规划设计。',
        link: '/portfolio/dashboard',
        cover: '/portfolio/dashboard.jpg'
      }
    ]
  }, {
    title: '其它',
    brief: '业余时间做的一些事情。',
    posts: [
      {
        title: '设计工具 Framer 国内推广者',
        description: '写了很多 Framer 教程，并创建了其中文网。',
        link: '/portfolio/framer',
        cover: '/portfolio/framer.jpg'
      }, {
        title: '一些小工具',
        description: '解决一些小问题的工具。',
        link: '/portfolio/tools',
        cover: '/portfolio/tools.jpg'
      }, {
        title: '一直坚持的写作',
        description: '从 2015 年开始持续写作。',
        link: '/portfolio/writing',
        cover: '/portfolio/writing.jpg'
      }, {
        title: '无聊的脑洞',
        description: '突然而至的灵感。',
        link: '/portfolio/brainhole',
        cover: '/portfolio/brainhole.jpg'
      }
    ]
  }
]

export default class extends React.Component {
  componentDidMount () {
    const canView = localStorage.getItem('portfolio')
    if (!canView) {
      localStorage.setItem('portfolio', true)
    }
  }
  render () {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO
          title="作品集"
        />
        <div className="layout-portfolio container">
          <div className="portfolio-bio">
            <h1>Jun 的交互作品集</h1>
          </div>
          {
            sections.map(section =>
              <div className="portfolio-section" key={section.title}>
                <h1 className="section-title">{section.title}</h1>
                <p className="section-description">{section.brief}</p>
                <ul className="section-items">
                  {
                    section.posts.map(post =>
                      <li className="section-item" key={post.title}>
                        <Link to={post.link} className="item-card">
                          <div className="card-cover">
                            <img src={withPrefix(`${post.cover}`)} alt={post.title}/>
                          </div>
                          <p className="card-title">{post.title}</p>
                          <p className="card-description">{post.description}</p>
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </Layout>
    )
  }
}
