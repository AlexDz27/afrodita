import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ServiceCategoriesList from "./components/ServiceCategoriesList/ServiceCategoriesList";

const App = () => {
    const categories = [
        {
            name: 'Face care',
            img: '/img/booking/service-categories/face-care.png'
        },
        {
            name: 'Hair removal',
            img: '/img/booking/service-categories/hair-removal.jpg'
        },
        {
            name: 'Massage',
            img: '/img/booking/service-categories/massage.jpg'
        },
        {
            name: 'Manicure',
            img: '/img/booking/service-categories/manicure.jpg'
        },
        {
            name: 'Pedicure',
            img: '/img/booking/service-categories/pedicure.png'
        },
        {
            name: 'Brows',
            img: '/img/booking/service-categories/brows.png'
        }
    ];

    return (
        <div className="app container">
          <Header />
          <ServiceCategoriesList categories={categories} />
        </div>
    );
}

export default App;