import React, { useState, useEffect } from 'react';

const ContactInfo = ({ order, setRequiredFieldsFilled, setOrder }) => {
  const [inputNameValue, setInputNameValue] = useState('');
  const [inputPhoneValue, setInputPhoneValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');

  useEffect(() => {
    checkIfRequiredFieldsFilled();
    setContactInfo();
  }, [inputNameValue, inputPhoneValue, inputEmailValue]);

  function setContactInfo() {
    setOrder({
      items: order.items,
      contactInfo: {
        name: inputNameValue,
        phone: inputPhoneValue,
        email: inputEmailValue
      }
    })
  }

  function checkIfRequiredFieldsFilled() {
    if (inputNameValue && inputPhoneValue) {
      setRequiredFieldsFilled(true);
    } else {
      setRequiredFieldsFilled(false);
    }
  }

  return (
    <div className="contact-info-container container">
      <h2 className="mb-5">Please, leave your contact info so that we could contact you:</h2>

      <form className="text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your name <span style={{ color: 'red' }}>*</span></label>
          <input
            onChange={(evt) => setInputNameValue(evt.target.value)}
            name="name"
            type="text"
            placeholder="Olga"
            className="form-control"
            id="name"
            required={true}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Your phone <span style={{ color: 'red' }}>*</span></label>
          <input
            onChange={(evt) => setInputPhoneValue(evt.target.value)}
            name="phone"
            type="tel"
            placeholder="+375 (33) 382-98-73"
            className="form-control"
            id="phone"
            required={true}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address <span
            className="text-muted">(optional)</span></label>
          <input
            onChange={(evt) => setInputEmailValue(evt.target.value)}
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
      </form>
    </div>
  );
};

export default ContactInfo;