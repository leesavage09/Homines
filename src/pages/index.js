import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=300&fm=gif&q=1'
  const quote = `“In ons organisme is er een complexe wisselwerking tussen lichaam, geest en ziel; alles is voortdurend en niets staat ooit stil. Het gaat om het doelgericht activeren van de basisregulatie en de zelfhelende krachten van het lichaam.”`
  
  return (
    <Layout>
      <Seo title="Home" />
      <Jumbotron imageSrc={ContactHeaderSrc} quote={quote} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    contentfulImages(name: {eq: "Homines Text Logo"}) {
      image {
        url
      }
  }
}
`