import React, {useEffect, useRef} from 'react';
import './OrderPane.scss';

const OrderPane = ({order}) => {
    const component = useRef();

    useEffect(() => {
        // Fix first inactive animation
        component.current.classList.remove('order-pane--inactive');
    }, []);

    const choosingStarted = order.category !== null;

    return (
        <div className={`order-pane ${choosingStarted ? 'order-pane--active' : 'order-pane--inactive'}`} ref={component}>
            <h2 className="order-pane__heading">Your order:</h2>
            <ul>
                {order.category && <li>Category: <b>{order.category}</b></li>}
                {order.service && <li>Service: <b>{order.service}</b></li>}
                {order.time && <li>Time: <b>{order.time}</b></li>}
            </ul>
        </div>
    );
}

export default OrderPane;