import React from 'react';
import Head from 'next/head';
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import FirstView from '../modules/views/FirstView';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';
import { Copyright } from '../components/index';
import Box from '@material-ui/core/Box';

function index() {
  return (
    <React.Fragment>
      <Head>
        <title>パーソナルトレーニングマッチング</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppAppBar />
      <FirstView />
      <ProductHowItWorks />
      <ProductValues />
      <ProductCategories />
      {/* <ProductCTA />
      <ProductSmokingHero /> */}
      <Box mt={8}>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}

export default withRoot(index);
