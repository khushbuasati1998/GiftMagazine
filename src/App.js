import './App.css';
import React, { useState, useCallback } from 'react';
import NavbarMenu from './modules/home/navbar';
import theme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import WhyUsHome from './modules/whyus/whyusHome';
import FooterHome from './modules/footer/footerHome';
import ProductList from './modules/products/productList';
import LoginForm from './modules/authentication/login';
import Signup from './modules/authentication/signup';
import HomeCard from './modules/home/HomeCard';
import SaleOfferCard from './modules/offers/saleOfferCard';

function App() {

  // component states start here
  const [tabIndex, setTabIndex] = useState(0);
  // component states end here

  const fetchTabIndex = (index) => {
    setTabIndex(index);
  };

  const renderTabDetails = useCallback(() => {
    return (
      tabIndex === 0 ?
        <>
          <HomeCard/>
          <ProductList />
          <SaleOfferCard/>
          <WhyUsHome />

          <FooterHome />
        </>
        :
        tabIndex === 1 ?
          <>
            <ProductList />
            <FooterHome />
          </>
          :
          tabIndex === 2 ?
            <>
              <WhyUsHome />
              <FooterHome />
            </>
            :
              tabIndex === 3 ?
                <LoginForm />
                : tabIndex === 4 ?
                  <Signup />
                  : null
    );
  }, [tabIndex]);

  return (
    <MuiThemeProvider theme={theme}>
      <NavbarMenu resendTabIndex={fetchTabIndex} />
      {renderTabDetails()}
    </MuiThemeProvider>
  );
}

export default App;
