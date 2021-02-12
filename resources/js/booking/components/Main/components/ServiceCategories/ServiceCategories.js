import React from 'react';
import './ServiceCategories.scss';
import categories from "./serviceCategoriesData";

const ServiceCategories = ({order, onCategoryChoose, onNextStage}) => {
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