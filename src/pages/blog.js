import React from 'react'
import { Link, graphql } from 'gatsby'
import Sticky from 'react-stickynode'
import Layout from '../components/layout'
import './blog.styl'
import SEO from '../components/seo'

const getYear = date =>
  (new Date(date)).getFullYear()

const groupedPostsByYear = posts => {
  const groupedPosts = {}

  posts
    // eslint-disable-next-line
    .map((post, index) => {
      const thisYear = getYear(post.frontmatter.date)
      if (index===0 || getYear(posts[index - 1].frontmatter.date) !== thisYear) {
        groupedPosts[thisYear] = [post]
      } else {
        groupedPosts[thisYear].push(post)
      }
    })

  return groupedPosts
}

export default ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges
  const groupedPosts = groupedPostsByYear(posts.map(({node}) => node))
  return (
    <Layout location={location}>
      <SEO
        title="文章"
      />
      <div className="layout-blog container">
        <h1 className="blog-title">我的文章</h1>
        <p className="blog-description">欢迎观赏</p>
        {
          Object.keys(groupedPosts)
            .sort((year1, year2) => year2 - year1)
            .map(year =>
              <div className="blog-section" id={`year-${year}`} key={year}>
                <Sticky top={63} innerZ={1} bottomBoundary={`#year-${year}`}>
                  <h2 className="blog-year">{ year }</h2>
                </Sticky>
                <ul className="blog-posts">
                  {
                    groupedPosts[year]
                      .map(post =>
                        <li className="blog-post" key={post.id}>
                          <Link to={post.fields.slug} className="post-link">
                            <div className="post-main">
                              <span className="post-title">{post.frontmatter.title}</span>
                              <span className="post-stretch"/>
                              <span className="post-date">{post.frontmatter.date}</span>
                            </div>
                            <div className="post-tags">
                              <span>
                                {
                                  post.frontmatter.tags &&
                                  post.frontmatter.tags.replace(',', ', ')
                                }
                              </span>
                            </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC] }) {
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
            tags
          }
        }
      }
    }
  }
`
