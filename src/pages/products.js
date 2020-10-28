import React from 'react';
import Gallery from '../components/Gallery/products';
import Layout from '../components/layout';

const Products = () => {

  return (
    <>
    <Layout />
      <div id="main">
        <section id="two">
          <h2>Products</h2>
          <Gallery />
        </section>
      </div>
    </>
  )
}

export default Products
