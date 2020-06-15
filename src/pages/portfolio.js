import React from 'react';
import Gallery from '../components/Gallery/portfolio';
import Layout from '../components/layout';

const Portfolio = () => {

  return (
    <>
    <Layout />
      <div id="main">
        <section id="two">
          <h2>Portfolio</h2>
          <Gallery />
        </section>
      </div>
    </>
  )
}

export default Portfolio
