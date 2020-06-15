import React from 'react'
import Gallery from '../components/Gallery/landscape';
import Layout from '../components/layout';

const Landscape = () => {

  return (
    <>
      <Layout />
      <div id="main">
        <section id="two">
          <h2>Landscape</h2>
          <Gallery />
        </section>
      </div>
    </>
  )
}

export default Landscape
