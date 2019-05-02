import React from "react"
import { Link, withPrefix, graphql } from "gatsby"
import Layout from "../components/layout"
import './home.styl'
import Bio from "../components/bio"
import SEO from '../components/seo'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.isGrouped = false
    const groupedPosts = {
      projects: {
        brief: '我自己设计开发的一些网站。'
      },
      tools: {
        brief: '我做的一些小工具。'
      },
      creative: {
        brief: '一些脑洞大开的小创意。'
      },
      writing: {
        brief: '我写的文章和电子书。'
      },
      painting: {
        brief: '我画的画。'
      }
    }
    const posts = this.props.data.allMarkdownRemark.edges
    if (!this.isGrouped) {
      // eslint-disable-next-line
      posts.map(({node}) => {
        const { category } = node.frontmatter
        if (groupedPosts[category].posts) {
          groupedPosts[category].posts.push(node)
        } else {
          groupedPosts[category].posts = [node]
        }
      })
      this.state = {groupedPosts}
      this.isGrouped = true
    }
  }
  render () {
    const { groupedPosts } = this.state
    return (
      <Layout location={this.props.location}>
        <SEO
          title="首页"
        />
        <div className="layout-home container">
          <Bio hasAvatar/>
          <div className="home-anchor">
            <a href="#projects">项目</a>
            <a href="#tools">工具</a>
            <a href="#creative">脑洞</a>
            <a href="#writing">写作</a>
            <a href="#painting">画画</a>
          </div>
          {
            Object.keys(groupedPosts).map(key =>
              <div className="home-section" id={key} key={key}>
                <h1 className="section-title">{key}</h1>
                <p className="section-description">{groupedPosts[key].brief}</p>
                <ul className="section-items">
                  {
                    groupedPosts[key].posts.map(post =>
                      <li className="section-item" key={post.id}>
                        <Link to={post.fields.slug} className="item-card">
                          <div className="card-cover">
                            <img src={withPrefix(post.frontmatter.cover)} alt={post.frontmatter.title}/>
                          </div>
                          <p className="card-title">{post.frontmatter.title}</p>
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

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "^\/works\/"} }
      sort: { fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fields{
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            color
            cover
            category
          }
        }
      }
    }
  }
`
