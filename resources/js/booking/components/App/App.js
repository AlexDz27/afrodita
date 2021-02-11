import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import ServiceCategoriesList from "./components/ServiceCategoriesList/ServiceCategoriesList";
import ServicesList from "./components/ServicesList/ServicesList";
import OrderPane from "./components/OrderPane/OrderPane";

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

    useEffect(() => {
        // Tell OrderPane to not show when app loads
        document.querySelector('.order-pane').classList.remove('order-pane--inactive');

        // If clicked outside, unset current order stage choice
        window.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('active') || evt.target.classList.contains('next-button')) return;

            if (orderRef.current[stage]) setOrder({...order, stage: null});
        });
    }, []);

    const handleCategoryChoose = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.currentTarget.text;

        setOrder({...order, category: chosenCategory});
    }

    const handleNextStage = () => {
        console.log(12345);
        // setStage();
    }

    return (
        <div className="app container">
          <Header />
          <ServiceCategoriesList order={order} onCategoryChoose={handleCategoryChoose} onNextStage={handleNextStage} />

          {/*<Stage stage={stage} />*/}
          {/*<ServicesList order={order} />*/}

          <OrderPane order={order} />
        </div>
    );
}

export default App;