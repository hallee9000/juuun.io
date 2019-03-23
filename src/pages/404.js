import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from 'axios'
import { Link } from "gatsby"
import './404.styl'

export default class extends React.Component {
  state = {
    movie: {},
    textContent: ''
  }
  componentDidMount () {
    axios.get('https://lab.juuust.com/api/douban/movie/top250', {
      header:{
        'Content-Type':'application/json'
      },
      params: {
        start: Math.floor(Math.random()*250),
        count: 1
      }
    })
    .then(({data}) => {
      var movie = data.subjects[0]
      this.setState({
        movie
      })
    })
    .catch(error => {
      this.setState({
        textContent: '没找到合适的电影 :-('
      })
    });
  }
  render () {
    const { movie, textContent } = this.state
    return (
      <Layout location={this.props.location}>
        <SEO title="404 房间" />
        <div className="not-found">
          <div className="container">
            <h1>404</h1>
            <p>404 房间里什么也没有，不如我给你推荐一部电影：</p>
            <h3>《{movie.title}》</h3>
            <blockquote className="not-found-quote">
              {textContent ? textContent : movie.comment}
            </blockquote>
            <Link to="/">回到首页</Link>
          </div>
        </div>
      </Layout>
    )
  }
}
