import React from 'react';
import serviceCategories from '../data/serviceCategories.json';
import ServiceCategory from './ServiceCategory';

const StageServiceCategory = ({ onServiceCategoryClick, chosenCategoryId }) => {
  return (
    <div>
      <h2 className="mb-5">Choose a service category:</h2>

      <ul className="choosables">
        {serviceCategories.map((category) => {
          const isChosen = category.id === chosenCategoryId;

          return (
            <ServiceCategory
              key={category.id}
              isChosen={isChosen}
              category={category}
              onServiceCategoryClick={onServiceCategoryClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default StageServiceCategory;