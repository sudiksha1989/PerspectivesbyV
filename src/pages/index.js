import React from 'react';
import { Helmet } from 'react-helmet';

import Dashboard from './dashboard';
import Layout from '../components/layout';
import { SITE_TITLE } from '../assets/constants';

const HomeIndex = () => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SITE_TITLE}</title>
      </Helmet>
      <Layout />
      <Dashboard />
    </div >
  )
}

export default HomeIndex
