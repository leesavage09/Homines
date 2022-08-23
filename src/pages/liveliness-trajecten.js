import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"

const LivelinessPage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=485&fm=gif&q=1'
  const quote = `“The body is a self-healing organism, so it’s your job to nurture it and clearing things out of the way so the body can heal itself.”`

  return (
    <Layout>
      <Seo title="Liveliness Trajecten" />
      <Jumbotron title="LIVELINESS TRAJECTEN" imageSrc={ContactHeaderSrc} quote={quote} />
    </Layout>
  )
}

export default LivelinessPage

export const pageQuery = graphql`
  query LivelinessPageQuery {
    contentfulImages(name: {eq: "Liveliness trajecten header"}) {
      image {
        url
      }
  }
}
`
