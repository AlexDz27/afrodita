import React, {useState, useEffect} from 'react';
import './ServicesList.scss';

const ServicesList = ({order}) => {
    const [services, setServices] = useState([]);

    return (
        <ul className="services-list">
            <li className="service">
                <a href="#">
                    Face lifting
                </a>
            </li>
        </ul>
    );
}

export default ServicesList;