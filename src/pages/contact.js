import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"

const ContactPage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=300&fm=gif&q=1'
  const quote = `“I make it a point to practice self-care. I make an appointment with myself”`

  return (
    <Layout>
      <Seo title="Contact" />
      <Jumbotron title="Contact" imageSrc={ContactHeaderSrc} quote={quote} />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    contentfulImages(name: {eq: "Homines contact header"}) {
      image {
        url
      }
  }
}
`
