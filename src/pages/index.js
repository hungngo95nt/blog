import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = `hungngo95nt`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `react`, `hungngo95nt`, `netlify`]}
        />
        <img style={{ margin: 0 }} src="./deno.jpg" alt="Deno" />
        <h1>
          Hey Guys{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Hùng Ngô website.</p>
        <p>
          This is my blog develop using Gatsby and Netlify CMS.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blogs</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
