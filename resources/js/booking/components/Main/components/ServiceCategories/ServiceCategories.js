import React from 'react';
import './ServiceCategories.scss';

const ServiceCategories = ({order, onCategoryChoose, onNextStage}) => {
    const categories = [
        {
            name: 'Face care',
            img: '/img/booking/service-categories/face-care.jpg'
        },
        {
            name: 'Hair removal',
            img: '/img/booking/service-categories/hair-removal.jpg'
        },
        {
            name: 'Massage',
            img: '/img/booking/service-categories/massage.jpg'
        },
        {
            name: 'Manicure',
            img: '/img/booking/service-categories/manicure.jpg'
        },
        {
            name: 'Pedicure',
            img: '/img/booking/service-categories/pedicure.jpg'
        },
        {
            name: 'Brows',
            img: '/img/booking/service-categories/brows.jpg'
        },
    ];

    return (
        <div>
            <ul className="service-categories-list">

                {categories.map((cat, idx) => (
                    <li key={idx} className="service-categories-list__item">
                        <button style={{backgroundImage: `url('${cat.img}')`}}
                                onClick={onCategoryChoose}
                                className={`service ${order.category === cat.name ? 'active' : ''}`}>
                            {cat.name}
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default ServiceCategories;