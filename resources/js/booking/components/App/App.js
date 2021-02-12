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
    const [stage, _setStage] = useState('category');
    const stageRef = useRef(stage);
    const setStage = (stage) => {
        stageRef.current = stage;
        _setStage(stage);
    }

    const handleNextStage = () => {
        setStage('service');
    }

    const handleCategoryChoose = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.target.innerText;

        setOrder({...order, category: chosenCategory});
    }

    const handleServiceChoose = (evt) => {
        evt.preventDefault();

        const chosenService = evt.target.innerText;

        setOrder({...order, service: chosenService});
    }

    const handleOutsideClick = (evt) => {
        // todo: refactor using ref
        const main = document.querySelector('.main');

        if (main.contains(evt.target)) return;

        if (stageRef.current === 'category') {
            setOrder({...order, category: null});
        }
    }

    return (
        <div className="app" onClick={handleOutsideClick}>
            <Offer />
            <Header />

            <Main order={order} stage={stage} onCategoryChoose={handleCategoryChoose} onNextStage={handleNextStage} onServiceChoose={handleServiceChoose} />

            <Footer />
        </div>
    );
}

export default App;