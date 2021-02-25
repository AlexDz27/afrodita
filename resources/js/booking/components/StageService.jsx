import React from 'react';
import { servicesData } from '../data/services';
import Service from './Service';

const StageService = ({category, onServiceClick, chosenServiceId}) => {
  const services = servicesData[category];

  return (
    <div>
      <h2>Choose a service:</h2>

      <ul className="choosables">
        {services.map((service, idx) => {
          const isChosen = service.id === chosenServiceId;

          return (
            <Service key={idx} service={service} onServiceClick={onServiceClick} isChosen={isChosen} />
          )
        })}
      </ul>
    </div>
  );
}

export default StageService;