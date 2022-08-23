import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Jumbotron from "../components/jumbotron"

const OverPage = (props) => {
  const ContactHeaderSrc = props.data.contentfulImages.image.url + '?w=485&fm=gif&q=1'
  const quote = (<>'I AM' <br/> “Two of the most powerful words in existence, because you become what you put after them.”</>)

  return (
    <Layout>
      <Seo title="Over Selina" />
      <Jumbotron title="OVER MIJ" imageSrc={ContactHeaderSrc} quote={quote} />
    </Layout>
  )
}

export default OverPage

export const pageQuery = graphql`
  query OverPageQuery {
    contentfulImages(name: {eq: "Over Selina Header"}) {
      image {
        url
      }
  }
}
`