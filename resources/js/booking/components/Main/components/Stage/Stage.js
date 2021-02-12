import React from 'react';
import './Stage.scss';
import ServiceCategories from "../ServiceCategories/ServiceCategories";

const Stage = ({stage, order, onCategoryChoose, onNextStage}) => {
    const stageToHeader = {
        'category': 'Choose service category:',
        'service': 'Choose your service:',
        'time': 'your time and date:',
        'contactInfo': 'Please, leave us info on how to contact you:'
    };

    return (
        <div className="stage">
            <header className="stage__header">
                <h2>{stageToHeader[stage]}</h2>
            </header>

            {stage === 'category' &&
                <ServiceCategories order={order} onCategoryChoose={onCategoryChoose} onNextStage={onNextStage} />
            }

            {stage === 'service' &&
                <div>Hey, I'm a service stage</div>
            }
        </div>
    );
}

export default Stage;