import React, { useState, useReducer, useRef, useEffect } from 'react';
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
    case 'SUBMITTED_AND_GONE_TO_FIRST_STAGE':
      // TODO: clean up this mess... Why initial state isn't working here?
      updatedState = {
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

  const [loadingOnSubmit, setLoadingOnSubmit] = useState(false);
  useEffect(() => {
    if (loadingOnSubmit === true) {
      document.body.style.cursor = 'wait';
    } else {
      document.body.style.cursor = null;
    }
  }, [loadingOnSubmit]);

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
    },

    goToFirstStage() {
      const firstIdx = 0;
      const firstStage = this.stages[firstIdx];

      this._currentIdx = firstIdx;
      this.currentStage = firstStage;

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

  const onOrderSubmit = async () => {
    dispatch({ type: 'ENTERED_CONTACT_INFO', payload: contactInfo });

    // todo: разобраться, как нормально достучаться до обновленного стейта сразу? чтобы не писать говно ниже
    // а походу никак...
    const details = getBeautifiedOrderDetails(order.details);
    const finalOrder = { details: details, contactInfo: { ...contactInfo } };

    const isOrderConfirmed = confirm(
      `Here's your order:
      
      Category: ${details.serviceCategory}
      Service: ${details.service}
      Time: ${details.time}` +

      `\n\nIs this correct?` + `\nIf not, you can go back and change your order.`
    );

    if (isOrderConfirmed === false) return;

    setLoadingOnSubmit(true);

    const response = await fetch(window.apiUrl + '/api/booking-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(finalOrder)
    });
    let result = await response.json();

    setLoadingOnSubmit(false);

    if (result.success === true) {
      alert(`Your order has been submitted successfully. We'll contact you shortly.`);

      dispatch({ type: 'SUBMITTED_AND_GONE_TO_FIRST_STAGE' });
      stager.goToFirstStage();
    } else {
      alert(`Oh-oh, an error occurred while submitting your order. Please, try again later`);
    }

    // TODO: Logging on errors / successes
  };

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
        loadingOnSubmit={loadingOnSubmit}
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