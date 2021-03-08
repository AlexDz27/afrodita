import '../../scss/site/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPhoneButton } from './components/ShowPhoneButton/ShowPhoneButton';
import { SearchCatalogInput } from './components/SearchCatalogInput/SearchCatalogInput';
import CartItemsCount from './components/CartItemsCount';
import AddToCartButton from './components/AddToCartButton';
import CartPage from './components/CartPage';
import { AddAttributesButton } from './components/AddAttributesButton/AddAttributesButton';
import './modules/localStorageEvents';
// TODO: split into "admin.js"
import SpecificDatePicker from './components/SpecificDatePicker';

// On app pages, in navbar. Renders "Show our number" button in navbar. On click, shows telephone number of the studio
if (document.getElementById('show-phone-button-container')) {
  const showPhoneButtonContainer = document.getElementById('show-phone-button-container');
  const phone = showPhoneButtonContainer.dataset.phone;
  ReactDOM.render(<ShowPhoneButton phone={phone}/>, showPhoneButtonContainer);
}

// On all pages, in navbar. Renders search for catalog
const searchContainer = document.getElementById('catalog-search-container');
ReactDOM.render(<SearchCatalogInput/>, searchContainer);

// On all pages, in navbar. Renders count
if (document.getElementById('cart-nav__items-count-container')) {
  ReactDOM.render(<CartItemsCount/>, document.getElementById('cart-nav__items-count-container'));
}

// On catalog > products page. Renders 'Add to cart' button with delete button
if (document.getElementById('add-to-cart-btn-container')) {
  ReactDOM.render(<AddToCartButton/>, document.getElementById('add-to-cart-btn-container'));
}

// On cart page. Renders cart page
if (document.getElementById('cart-page-container')) {
  ReactDOM.render(<CartPage/>, document.getElementById('cart-page-container'));
}

// On admin page > Edit service/product. Renders add attributes button
if (document.getElementById('add-attributes-button-container')) {
  ReactDOM.render(<AddAttributesButton/>, document.getElementById('add-attributes-button-container'));
}

// On admin page, on Bookings and Orders page. Renders specific date button and picker
if (document.getElementById('specific-date-link-container')) {
  const container = document.getElementById('specific-date-link-container');
  const active = container.dataset.active;
  ReactDOM.render(<SpecificDatePicker active={active} />, container);
}