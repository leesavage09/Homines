import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Jumbotron from '../components/jumbotron'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../components/section'
import ContactSection from '../components/contactSection'

const ContactPage = props => {
    const ContactHeaderSrc =
        props.data.contentfulImages.image.url + '?w=444&fm=gif&q=1'
    const ContactHeaderAlt = props.data.contentfulImages.altText
    const quote = `“I make it a point to practice self-care. I make an appointment with myself”`
    const MainImageSrc =
        props.data.contentfulPhotos.photo.url + '?w=377&fm=jpg&q=80'
    const MainImageAlt = props.data.contentfulPhotos.altText

    return (
        <Layout>
            <Seo title="Contact" />
            <Jumbotron
                title="Contact"
                imageSrc={ContactHeaderSrc}
                imageAlt={ContactHeaderAlt}
                quote={quote}
            />

            <Section className="flex flex-col lg:flex-row mb-20 lg:mb-0 justify-center items-center">
                <div className="w-6/6 md:w-5/6 lg:w-3/6 flex items-center">
                    <p>
                        Wil je aan de slag met manuele therapie maar dan anders,
                        of ben je nieuwsgierig naar het Liveliness Traject? Neem
                        gerust contact met mij op om een belafspraak te maken.
                        <br /> <br />
                        Ook voor vragen over voeding, suppletie of sporten bij
                        Home of Heroes sta ik voor je klaar. Samen kijken we
                        naar wat bij jou past en wat jouw behoefte zijn.
                    </p>
                </div>
                <div className="w-6/6 md:w-5/6 lg:w-3/6 flex justify-center items-start">
                    <div className="border-solid border-4 border-olive p-4">
                        <h2 className="mt-0">HominesBoZ</h2>
                        <ul className="flex flex-col justify-start items-start">
                            <li className="my-2  flex flex-row">
                                <a href="tel:+31653505456">
                                    <FontAwesomeIcon
                                        className="text-xl pr-4 text-olive"
                                        icon={faMobileScreen}
                                    />
                                    0653505456
                                </a>
                            </li>
                            <li className="my-2">
                                <a href="mailto:Hominesboz@gmail.com">
                                    <FontAwesomeIcon
                                        className="text-xl pr-4 text-olive"
                                        icon={faEnvelope}
                                    />
                                    Hominesboz@gmail.com
                                </a>
                            </li>
                            <li className="my-2">
                                <FontAwesomeIcon
                                    className="text-xl pr-4 text-olive"
                                    icon={faLocationDot}
                                />
                                <a
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Bergen+op+Zoom,+Netherlands/@51.4850255,4.2192038,11.74z/data=!4m5!3m4!1s0x47c413332081048f:0x1dd39c8b40e3b686!8m2!3d51.4945758!4d4.2871622"
                                >
                                    Bergen op Zoom
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            <ContactSection />
        </Layout>
    )
}

export default ContactPage

export const pageQuery = graphql`
    query ContactPageQuery {
        contentfulImages(name: { eq: "Homines contact header" }) {
            image {
                url
            }
            altText
        }
        contentfulPhotos(name: { eq: "Selina" }) {
            photo {
                url
            }
            altText
        }
    }
`
