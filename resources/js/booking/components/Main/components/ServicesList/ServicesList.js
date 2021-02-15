import React from 'react';
import './ServicesList.scss';
import Service from "./Service";

const ServicesList = ({services, order, onServiceChoose, onActivateService}) => {
    return (
        <ul className="services-list">
            {services.map((service, idx) => (
                <li className="services-list__item" key={idx}>
                    <Service service={service} order={order} onServiceChoose={onServiceChoose} onActivateService={onActivateService} />
                </li>
            ))}
        </ul>
    );
}

export default ServicesList;