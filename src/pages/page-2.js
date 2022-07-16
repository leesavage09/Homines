import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = (props) => {
  console.log('props', props.data);

  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>
        <img width={props.data.contentfulAsset.width} height={props.data.contentfulAsset.height} src={props.data.contentfulAsset.url} />
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
};

export default SecondPage

export const pageQuery = graphql`
  query getMainPhoto {
  contentfulAsset(title: {eq: "mainphoto"}) {
    url
    height
    width
  }
}
`
