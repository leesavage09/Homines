import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"

const ManuelePage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=300&fm=gif&q=1'
  const quote = `“Listen to your body. It’s smarter than you are.“`

  return (
    <Layout>
      <Seo title="Manuele- &amp; Fysiotherapie" />
      <Jumbotron title="MANUELE- &amp; FYSIOTHERAPIE" imageSrc={ContactHeaderSrc} quote={quote} />
    </Layout>
  )
}

export default ManuelePage

export const pageQuery = graphql`
  query ManuelePageQuery {
    contentfulImages(name: {eq: "Manuele- & fysiotherapie header"}) {
      image {
        url
      }
  }
}
`
