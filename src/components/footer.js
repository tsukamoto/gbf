import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteCopy }) => (
  <div
    style={{
      background: '#effebc',
      marginBottom: '0',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <div style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteCopy}
          © 2018 Tsukamotch All Rights Reserved.
        </Link>
      </div>
    </div>
  </div>
)

export default Footer
