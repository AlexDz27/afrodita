import React from 'react';
import './ServicesList.scss';
import servicesData from './servicesData';
import Service from "./Service";

const ServicesList = ({category, order, onServiceChoose}) => {
    const services = servicesData[category];

    return (
        <ul className="services-list">
            {services.map((service, idx) => (
                <li className="services-list__item" key={idx}>
                    <Service service={service} order={order} onServiceChoose={onServiceChoose} />
                </li>
            ))}
        </ul>
    );
}

export default ServicesList;