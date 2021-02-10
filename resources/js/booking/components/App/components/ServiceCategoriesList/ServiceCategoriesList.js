import React, {useState} from 'react';
import './ServiceCategoriesList.scss';

const ServiceCategoriesList = () => {
    const [category, setCategory] = useState(null);

    const handleClick = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.currentTarget.text;

        setCategory(chosenCategory);
    }

    // TODO: deal with ugly styles in all service categories. Need to be in SCSS
    return (
        <div>
            <ul className="service-categories-list">
              <li style={{backgroundImage: 'url(/img/booking/service-categories/face-care.png)'}}
                  className="service-category service-category--face"
              >
                  <a cat="face" onClick={handleClick} href="#">
                      Face care
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/hair-removal.jpg)', backgroundPosition: '20% 70%'}}
                  className="service-category service-category--hair"
              >
                  <a onClick={handleClick} href="#">
                      Hair removal
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/massage.jpg)', backgroundPosition: '60% 20%'}}
                  className="service-category service-category--massage"
              >
                  <a onClick={handleClick} href="#">
                      Massage
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/manicure.jpg)', backgroundPosition: '60% 20%'}}
                  className="service-category service-category--manicure"
              >
                  <a onClick={handleClick} href="#">
                      Manicure
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/pedicure.png)', backgroundPosition: '60% 40%'}}
                  className="service-category service-category--pedicure"
              >
                  <a onClick={handleClick} href="#">
                      Pedicure
                  </a>
              </li>
              <li style={{backgroundImage: 'url(/img/booking/service-categories/brows.png)', backgroundPosition: '60% 40%'}}
                  className="service-category service-category--brows"
              >
                  <a onClick={handleClick} href="#">
                      Brows
                  </a>
              </li>
            </ul>
            {category && <h2 style={{marginLeft: 130}}>You've chosen: {category}</h2>}
        </div>
    );
}

export default ServiceCategoriesList;