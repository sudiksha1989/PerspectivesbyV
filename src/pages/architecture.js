import React from 'react';
import Gallery from '../components/Gallery/architecture';
import Layout from '../components/layout';

const Architecture = () => {

  return (
    <>
    <Layout />
      <div id="main">
        <section id="two">
          <h2>Architecture</h2>
          <Gallery />
        </section>
      </div>
    </>
  )
}

export default Architecture
