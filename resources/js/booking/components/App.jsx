import React, { useState, useReducer, useRef } from 'react';
import Offer from './Offer';
import AppContent from './AppContent';
import { getBeautifiedOrderDetails } from '../utils/beatifyOrderDetails';

const initialState = {
  details: {
    serviceCategory: null,
    service: null,
    time: null
  },
  contactInfo: {
    name: '',
    phone: '',
    email: ''
  }
};

function reducer(state, action) {
  let updatedState;

  switch (action.type) {
    case 'CHOSEN_CATEGORY':
      updatedState = { ...state };
      updatedState.details.serviceCategory = action.payload;

      if (updatedState.details.service !== null) {
        updatedState.details.service = null;
      }

      return updatedState;
    case 'CHOSEN_SERVICE':
      updatedState = { ...state };
      updatedState.details.service = action.payload;

      return updatedState;
    case 'CHOSEN_TIME':
      updatedState = { ...state };
      updatedState.details.time = action.payload;

      return updatedState;
    case 'ENTERED_CONTACT_INFO':
      updatedState = { ...state };
      updatedState.contactInfo = action.payload;

      return updatedState;
    case 'DESELECTED_CATEGORY':
      updatedState = { ...state };
      updatedState.details.serviceCategory = null;

      return updatedState;
    default:
      throw new Error();
  }
}

const App = () => {
  const [order, dispatch] = useReducer(reducer, initialState);

  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [currentStage, setCurrentStage] = useState('serviceCategory');
  const _stager = {
    stages: ['serviceCategory', 'service', 'time', 'contactInfo'],

    _currentIdx: 0,
    currentStage: 'serviceCategory',

    back() {
      const prevIdx = this._currentIdx - 1;
      const prevStage = this.stages[prevIdx];

      if (prevStage === undefined) return;

      this._currentIdx = prevIdx;
      this.currentStage = prevStage;

      setCurrentStage(this.currentStage);
    },

    next() {
      const nextIdx = this._currentIdx + 1;
      const nextStage = this.stages[nextIdx];

      if (nextStage === undefined) return;

      this._currentIdx = nextIdx;
      this.currentStage = nextStage;

      setCurrentStage(this.currentStage);
    }
  };
  const stager = useRef(_stager).current;
  const onNextClick = () => {
    stager.next();
  };
  const onBackClick = () => {
    stager.back();
  };

  const onServiceCategoryClick = (id) => {
    dispatch({ type: 'CHOSEN_CATEGORY', payload: id });
  };

  const onServiceClick = (id) => {
    dispatch({ type: 'CHOSEN_SERVICE', payload: id });
  };

  const onTimeChoose = (time) => {
    dispatch({ type: 'CHOSEN_TIME', payload: time });
  };

  const onOrderSubmit = () => {
    dispatch({type: 'ENTERED_CONTACT_INFO', payload: contactInfo});
    
    // todo: разобраться, как нормально достучаться до обновленного стейта сразу? чтобы не писать говно ниже
    const details = getBeautifiedOrderDetails(order.details);
    const finalOrder = {details: details, contactInfo: {...contactInfo}};
    console.log(finalOrder)

    const isOrderConfirmed = confirm(
      `Here's your order:
      
      Service: ${details.service}
      Time: ${details.time}` +
      
      `\n\nIs this correct?` + `\nIf not, you can go back and change your order.`
    );

    if (isOrderConfirmed === false) return;

    alert('Success! Now the order data should be sent to server...');
  }

  const appElement = useRef(null);
  const stageElement = useRef(null);
  const onOutsideClick = (evt) => {
    if (currentStage !== 'serviceCategory') return;
    if (order.details.serviceCategory === null) return;
    if (order.details.service !== null) return;

    const clickedElement = evt.target;
    if (stageElement.current.contains(clickedElement)) return;

    dispatch({ type: 'DESELECTED_CATEGORY' });
  };

  return (
    <div ref={appElement} onClick={(evt) => onOutsideClick(evt)} className="app">
      <Offer/>

      <AppContent
        ref={stageElement}
        currentStage={currentStage}
        order={order}
        contactInfo={contactInfo}
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        onServiceCategoryClick={onServiceCategoryClick}
        onServiceClick={onServiceClick}
        onTimeChoose={onTimeChoose}
        setContactInfo={setContactInfo}
        onOrderSubmit={onOrderSubmit}
      />
    </div>
  );
};

export default App;