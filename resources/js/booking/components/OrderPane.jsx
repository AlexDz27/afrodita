import React, {useEffect, useState} from 'react';
import { getBeautifiedOrderDetails } from '../utils/beatifyOrderDetails';

const OrderPane = (props) => {
  const [animationClass, setAnimationClass] = useState('');

  // TODO: optimize rerender
  useEffect(() => {
    const details = props.details;
    
    if (details.serviceCategory) {
      setAnimationClass('order-pane--active');
    } else {
      setAnimationClass('order-pane--inactive');
    }
  }, [props]);
  useEffect(() => {
    setAnimationClass('');
  }, []);
  
  const details = getBeautifiedOrderDetails(props.details);

  return (
    <div className={`order-pane ${animationClass}`}>
      <h2 className="order-pane__heading">Your order:</h2>
      <ul>
        {details.serviceCategory && <li>Category: <b>{details.serviceCategory}</b></li>}
        {details.service && <li>Service: <b>{details.service}</b></li>}
        {details.time && <li>Time: <b>{details.time}</b></li>}
      </ul>
    </div>
  );
};

export default OrderPane;