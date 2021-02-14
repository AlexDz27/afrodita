import React from 'react';
import './Stage.scss';
import ServiceCategories from "../ServiceCategories/ServiceCategories";
import ServicesList from "../ServicesList/ServicesList";

const Stage = ({stage, order, onCategoryChoose, onServiceChoose}) => {
    const stageToHeader = {
        'category': 'Choose service category:',
        'service': 'Choose your service:',
        'time': 'Choose your time and date:',
        'contactInfo': 'Please, leave us info on how to contact you:'
    };

    const category = order.category;

    return (
        <div className="stage">
            <header className="stage__header">
                <h2>{stageToHeader[stage]}</h2>
            </header>

            {stage === 'category' &&
                <ServiceCategories order={order} onCategoryChoose={onCategoryChoose} />
            }

            {stage === 'service' &&
                <ServicesList order={order} onServiceChoose={onServiceChoose} category={category} />
            }
        </div>
    );
}

export default Stage;