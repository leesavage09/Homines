import * as React from 'react'

import Layout from '../components/layout'
import { OliveLinkButton } from '../components/LinkButton'
import Seo from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <div className="mt-40 mb-60">
            <h1>404: Pagina niet gevonden</h1>
            <OliveLinkButton to="/">Naar Homines</OliveLinkButton>
        </div>
    </Layout>
)

export default NotFoundPage
