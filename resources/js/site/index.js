import '../../scss/site/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPhoneButton } from './components/ShowPhoneButton/ShowPhoneButton';
import { SearchCatalogInput } from './components/SearchCatalogInput/SearchCatalogInput';
import CartItemsCount from './components/CartItemsCount';
import AddToCartButton from './components/AddToCartButton';
import { AddAttributesButton } from './components/AddAttributesButton/AddAttributesButton';
import './modules/localStorageEvents';
// TODO: split into "admin.js"
import SpecificDatePicker from './components/SpecificDatePicker';

// On all pages, in navbar. Renders "Show our number" button in navbar. On click, shows telephone number of the studio
const showPhoneButtonContainer = document.getElementById('show-phone-button-container');
const phone = showPhoneButtonContainer.dataset.phone;
ReactDOM.render(<ShowPhoneButton phone={phone}/>, showPhoneButtonContainer);

// On all pages, in navbar. Renders search for catalog
const searchContainer = document.getElementById('catalog-search-container');
ReactDOM.render(<SearchCatalogInput/>, searchContainer);

// On all pages, in navbar. Renders count
if (document.getElementById('cart-items-count-container')) {
  ReactDOM.render(<CartItemsCount/>, document.getElementById('cart-items-count-container'));
}

// On catalog > products page. Renders 'Add to cart' button with delete button
if (document.getElementById('add-to-cart-btn-container')) {
  ReactDOM.render(<AddToCartButton/>, document.getElementById('add-to-cart-btn-container'));
}

// On admin page > Edit service/product. Renders add attributes button
if (document.getElementById('add-attributes-button-container')) {
  ReactDOM.render(<AddAttributesButton/>, document.getElementById('add-attributes-button-container'));
}

// On admin page, on Bookings page. Renders specific date button and picker
if (document.getElementById('specific-date-link-container')) {
  ReactDOM.render(<SpecificDatePicker/>, document.getElementById('specific-date-link-container'));
}