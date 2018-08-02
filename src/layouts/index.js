import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
<<<<<<< HEAD
import './index.css'
=======
import Footer from '../components/footer'
import './index.css'
import './add.css'
>>>>>>> 144fa9a22bcd3d548eda44a076d4eabe7029e869

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
<<<<<<< HEAD
=======
    <Footer siteCopy={data.site.siteMetadata.copy} />
>>>>>>> 144fa9a22bcd3d548eda44a076d4eabe7029e869
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
