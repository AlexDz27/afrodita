import React from 'react';
import './ServiceCategories.scss';

const ServiceCategories = ({order, onCategoryChoose, onNextStage}) => {
    // TODO: deal with ugly styles in all service categories. Need to be in SCSS. Also I can create
    // object with info about each service category
    return (
        <div className="service-categories-container">
            <ul className="service-categories-list">
              <li style={{backgroundImage: 'url(/img/booking/service-categories/face-care.png)'}}
                  className="service service-category--face"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Face care' ? 'active' : ''}>
                      Face care
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/hair-removal.jpg)', backgroundPosition: '20% 70%'}}
                  className="service service-category--hair"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Hair removal' ? 'active' : ''}>
                      Hair removal
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/massage.jpg)', backgroundPosition: '60% 20%'}}
                  className="service service-category--massage"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Massage' ? 'active' : ''}>
                      Massage
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/manicure.jpg)', backgroundPosition: '60% 20%'}}
                  className="service service-category--manicure"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Manicure' ? 'active' : ''}>
                      Manicure
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/pedicure.png)', backgroundPosition: '60% 40%'}}
                  className="service service-category--pedicure"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Pedicure' ? 'active' : ''}>
                      Pedicure
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/brows.png)', backgroundPosition: '60% 40%'}}
                  className="service service-category--brows"
              >
                  <a onClick={onCategoryChoose} href="#" className={order.category === 'Brows' ? 'active' : ''}>
                      Brows
                  </a>
              </li>
            </ul>
        </div>
    );
}

export default ServiceCategories;