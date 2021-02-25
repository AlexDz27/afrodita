import '../../scss/booking/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

const orderFinished = {
  details: {
    serviceCategory: 'face_care',
    service: 'super_facial',
    time: '18:00'
  },
  contactInfo: {
    name: 'Alex',
    email: 'alexeydzyuba27@gmail.com',
    phone: '+375 33 382 98 73'
  }
};

const orderInitial = {
  details: {},
  contactInfo: {}
};

const orderServiceCategoryChosen = {
  details: {
    serviceCategory: 'face_care',
    service: null,
    time: null
  },
  contactInfo: {
    name: null,
    email: null,
    phone: null
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);