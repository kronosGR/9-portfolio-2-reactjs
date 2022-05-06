import React from 'react';
import Layout from '../Components/Layout/Layout';
import About from '../Components/Parts/About';
import Home from '../Components/Parts/Home';

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Home />
        <About />
      </Layout>
    </div>
  );
};

export default HomePage;
