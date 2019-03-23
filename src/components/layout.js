import React from "react"
import Footer from "./footer"
import Header from "./header"
import Bio from "./bio/index"
import "../assets/style.styl"

class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const isHome = location.pathname === rootPath
    return (
      <div className="default-layout">
        <Header location={location}/>
        {
          isHome && <Bio/>
        }
        {children}
        <Footer/>
      </div>
    )
  }
}

export default Layout
