import React from 'react';

const ServiceCategory = ({ category, onServiceCategoryClick, isChosen }) => {
  return (
    <li className="choosables__item">
      <button
        onClick={() => onServiceCategoryClick(category.id)}
        style={{backgroundImage: `url(${category.picture_url})`}}
        className={`choosable ${isChosen ? 'active' : ''}`}
      >
        {category.name}
      </button>
    </li>
  );
};

export default ServiceCategory;