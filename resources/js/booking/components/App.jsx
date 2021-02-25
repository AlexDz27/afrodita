import React, { useState, useReducer, useRef } from 'react';
import Offer from './Offer';
import AppContent from './AppContent';

const initialState = {
  details: {
    serviceCategory: null,
    service: null,
    time: null
  },
  contactInfo: {
    name: null,
    email: null,
    phone: null
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
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        onServiceCategoryClick={onServiceCategoryClick}
        onServiceClick={onServiceClick}
      />
    </div>
  );
};

export default App;