import React from 'react';
import './App.scss';
import Offer from "../Offer/Offer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const App = () => {
    return (
        <div className="app">
            <Offer />
            <Header />

            <Main />

            <Footer />
        </div>
    );
}

export default App;