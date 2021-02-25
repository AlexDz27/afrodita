import React, { useRef } from 'react';

const StageContactInfo = ({ setAreRequiredFieldsFilled, setContactInfo, onOrderSubmit }) => {
  // TODO: emulate Enter button press

  // const SUBMIT_URL = 'http://aphrodite.local/booking/submit';
  // const SUBMIT_URL = 'https://jsonplaceholder.typicode.com/todos/1';

  const nameInput = useRef(null);
  const phoneInput = useRef(null);
  const emailInput = useRef(null);
  const formRef = useRef(null);

  const onChange = () => {
    if (nameInput.current.value && phoneInput.current.value) {
      setAreRequiredFieldsFilled(true);

      setContactInfo({
        name: nameInput.current.value,
        phone: phoneInput.current.value,
        email: emailInput.current.value
      });
    } else {
      setAreRequiredFieldsFilled(false);

      setContactInfo({
        name: null,
        phone: null,
        email: null
      });
    }
  };
  
  return (
    <div>
      <h2 className="mb-5">Please, leave your contact info so that we could contact you:</h2>

      <form ref={formRef} className="text-start">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your name <span style={{ color: 'red' }}>*</span></label>
          <input name="name" ref={nameInput} onChange={onChange} type="text" placeholder="Olga" className="form-control" id="name"
                 required={true}/>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Your phone <span style={{ color: 'red' }}>*</span></label>
          <input name="phone" ref={phoneInput} onChange={onChange} type="tel" placeholder="+375 (33) 382-98-73"
                 className="form-control" id="phone" required={true}/>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address <span
            className="text-muted">(optional)</span></label>
          <input name="email" ref={emailInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
      </form>
    </div>
  );
};

export default StageContactInfo;