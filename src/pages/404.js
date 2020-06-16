import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { SITE_TITLE } from '../assets/constants';

const NotFoundPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{SITE_TITLE}</title>
      </Helmet>
    <div id="main">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
