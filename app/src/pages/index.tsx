import React from 'react';
import Head from 'next/head';
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import FirstView from '../modules/views/FirstView';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

function index() {
  return (
    <React.Fragment>
       <Head>
        <title>パーソナルトレーニングマッチング</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppAppBar />
      <FirstView />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(index);
