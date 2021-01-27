import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPhoneButton } from "./components/ShowPhoneButton/ShowPhoneButton";
import { AddAttributesButton } from "./components/AddAttributesButton/AddAttributesButton";

// Render "Show our number" button in navbar. On click, shows telephone number of the studio.
if (window.route === 'home') {
    const container = document.getElementById('show-number-container');
    const phone = container.dataset.phone; // get phone data from "data-phone=":phone" in container

    ReactDOM.render(<ShowPhoneButton phone={phone} />, container);
}

// Render "Show our number" button in navbar. On click, shows telephone number of the studio.
if (window.route === 'editProduct') {
    const container = document.getElementById('add-attributes-button-container');

    ReactDOM.render(<AddAttributesButton />, container);
}