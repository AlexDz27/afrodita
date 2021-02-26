import React, { useRef, useEffect } from 'react';

const StageContactInfo = ({ setAreRequiredFieldsFilled, setContactInfo, contactInfo, loadingOnSubmit }) => {
  // TODO: emulate Enter button press

  const nameInput = useRef(null);
  const phoneInput = useRef(null);
  const emailInput = useRef(null);
  const formRef = useRef(null);

  const onChange = () => {
    setContactInfo({
      name: nameInput.current.value,
      phone: phoneInput.current.value,
      email: emailInput.current.value
    });

    if (nameInput.current.value && phoneInput.current.value) {
      setAreRequiredFieldsFilled(true);
    } else {
      setAreRequiredFieldsFilled(false);
    }
  };
  
  return (
    <div>
      <h2 className="mb-5">Please, leave your contact info so that we could contact you:</h2>

      <form ref={formRef} className="text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your name <span style={{ color: 'red' }}>*</span></label>
          <input
            defaultValue={contactInfo.name}
            name="name"
            ref={nameInput}
            onChange={onChange}
            type="text"
            placeholder="Olga"
            className="form-control"
            id="name"
            required={true}
            disabled={loadingOnSubmit}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Your phone <span style={{ color: 'red' }}>*</span></label>
          <input
            defaultValue={contactInfo.phone}
            name="phone"
            ref={phoneInput}
            onChange={onChange}
            type="tel"
            placeholder="+375 (33) 382-98-73"
            className="form-control"
            id="phone"
            required={true}
            disabled={loadingOnSubmit}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address <span
            className="text-muted">(optional)</span></label>
          <input
            defaultValue={contactInfo.email}
            name="email"
            ref={emailInput}
            onChange={onChange}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            disabled={loadingOnSubmit}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
      </form>
    </div>
  );
};

export default StageContactInfo;