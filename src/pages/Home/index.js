import React from 'react';

import Header from '../../components/header'
import Product from '../../components/product'

export default function Home() {
  return (
    <div className="container-fluid">

        <Header />
        
        <div className="container" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: 20
        }}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  );
}
