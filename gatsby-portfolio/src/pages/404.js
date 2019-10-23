import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="container">
      <div class="row fullscreen d-flex align-items-center">
        <div class="banner-content col-lg-6 col-md-12 justify-content-center ">
          <div>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
