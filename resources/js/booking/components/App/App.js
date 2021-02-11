import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import OrderPane from "./components/OrderPane/OrderPane";
import Stage from "./components/Stage/Stage";

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

            if (orderRef.current[stage]) setOrder({...order, [stage]: null});
        });
    }, []);

    const handleCategoryChoose = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.target.innerText;

        setOrder({...order, category: chosenCategory});
    }

    const handleNextStage = () => {

        // setStage('service');
    }

    return (
        <div className="app container">
          <Stage stage={stage} order={order} onCategoryChoose={handleCategoryChoose} onNextStage={handleNextStage} />

          <button disabled={order.category === null} onClick={handleNextStage} className="next-button app__next-button">Next</button>

          <OrderPane order={order} />
        </div>
    );
}

export default App;