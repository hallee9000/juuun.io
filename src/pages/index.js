import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import workPosts from "./work.json"
import './home.styl'
import SEO from '../components/seo'

export default ({location, data}) => {
  const posts = data.allMarkdownRemark.edges
  // eslint-disable-next-line
  workPosts.map(({category}, index) => {
    workPosts[index].posts = posts
      .filter(({node}) => node.frontmatter.category===category.toLowerCase())
      .map(({node}) => node)
  })
  return (
    <Layout location={location}>
      <SEO
        title="首页"
      />
      <div className="layout-home container">
        {
          workPosts.map(({category, brief, posts}) =>
            <div className="home-section" id={category} key={category}>
              <h1 className="section-title">{category}</h1>
              <p className="section-description">{brief}</p>
              <ul className="section-items">
                {
                  posts.map(post =>
                    <li className="section-item" key={post.id}>
                      <Link to={post.fields.slug} className="item-card">
                        <div className="card-cover">
                          <img src={require(`../images/heroes/${post.frontmatter.cover}`)} alt={post.frontmatter.workTitle}/>
                        </div>
                        <p className="card-title">{post.frontmatter.workTitle}</p>
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

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {category: {ne: null}}},
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      edges {
        node {
          id
          fields{
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            workTitle
            category
            description
            color
            cover
          }
        }
      }
    }
  }
`
