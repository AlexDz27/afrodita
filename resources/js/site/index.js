import '../../scss/site/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { ShowPhoneButton } from './components/ShowPhoneButton/ShowPhoneButton';
import { AddAttributesButton } from './components/AddAttributesButton/AddAttributesButton';
import { SearchCatalogInput } from './components/SearchCatalogInput/SearchCatalogInput';
// TODO: split into "admin.js"
import SpecificDatePicker from './components/SpecificDatePicker';

// Render "Show our number" button in navbar. On click, shows telephone number of the studio.
const showPhoneButtonContainer = document.getElementById('show-phone-button-container');
const phone = showPhoneButtonContainer.dataset.phone;
ReactDOM.render(<ShowPhoneButton phone={phone}/>, showPhoneButtonContainer);

// Render search for catalog
const searchContainer = document.getElementById('catalog-search-container');
ReactDOM.render(<SearchCatalogInput/>, searchContainer);

// On admin page, render add attributes button
if (document.getElementById('add-attributes-button-container')) {
  ReactDOM.render(<AddAttributesButton/>, document.getElementById('add-attributes-button-container'));
}

if (document.getElementById('specific-date-link-container')) {
  ReactDOM.render(<SpecificDatePicker/>, document.getElementById('specific-date-link-container'));
}