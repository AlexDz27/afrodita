import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import Offer from "../Offer/Offer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const App = () => {
    const [order, _setOrder] = useState({
        category: null,
        service: null,
        time: null,
        contactInfo: null
    });
    const orderRef = useRef(order);
    const setOrder = (order) => {
        orderRef.current = order;
        _setOrder(order);
    }

    // Possible value: category, service, time, contactInfo
    const [stage, setStage] = useState('category');

    const handleNextStage = () => {
        console.log(window.location);
        // setStage('service');
    }

    const handleCategoryChoose = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.target.innerText;

        setOrder({...order, category: chosenCategory});
    }

    useEffect(() => {
        const app = document.querySelector('.app');
        const main = document.querySelector('.main');

        app.addEventListener('click', (evt) => {
            if (main.contains(evt.target)) return;

            if (stage === 'category' && orderRef.current.category !== null) {
                setOrder({...order, category: null});
            }
        })
    }, []);

    return (
        <div className="app">
            <Offer />
            <Header />

            <Main order={order} stage={stage} onCategoryChoose={handleCategoryChoose} onNextStage={handleNextStage} />

            <Footer />
        </div>
    );
}

export default App;