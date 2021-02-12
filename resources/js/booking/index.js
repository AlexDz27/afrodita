import '../../scss/booking/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/Header/Header";
import App from "./components/App/App";
import Footer from "./components/Footer/Footer";
import Offer from "./components/Offer/Offer";

ReactDOM.render(
    <div className="booking">
        <Offer />
        <Header />
        <App />
        <Footer />
    </div>,
    document.getElementById('root')
);