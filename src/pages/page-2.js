import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = (props) => {
  console.log('props', props.data);

  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>
        <img src={`${props.data.contentfulImages.photo.url}?w=300&fm=gif&q=1`} />
        sadasff
      </p>
      {/* <GatsbyImage image={props.data.contentfulImages.photo.gatsbyImageData} alt="alt text" /> */}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
};

export default SecondPage

// export const pageQuery = graphql`
//   query getMainPhoto {
//     contentfulImages(name: {eq: "Liveliness trajecten1"}) {
//       photo {
//         url
//         # gatsbyImageData(width: 100)
//       }
//   }
// }
// `
