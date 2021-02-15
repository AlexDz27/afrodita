import React, {useState} from 'react';
import './Stage.scss';
import ServiceCategories from "../ServiceCategories/ServiceCategories";
import ServicesList from "../ServicesList/ServicesList";
import TimeChooser from "../TimeChooser/TimeChooser";
import servicesDataByCategory from '../ServicesList/servicesDataByCategory';

// TODO: rename to Stages
const Stage = ({stage, order, onCategoryChoose, onServiceChoose}) => {
    const stageToHeader = {
        'category': 'Choose service category:',
        'service': 'Choose your service:',
        'time': 'Choose your time and date:',
        'contactInfo': 'Please, leave us info on how to contact you:'
    };

    const servicesData = servicesDataByCategory[order.category];
    console.log(servicesData);
    if (servicesData !== undefined) {

    }
    const [servicesArr, setServicesArr] = useState(servicesData);
    console.log('servicesArr: ', servicesArr);

    const handleActivateService = (name) => {
        console.log(name);
    }

    return (
        <div className="stage">
            <header className="stage__header">
                <h2>{stageToHeader[stage]}</h2>
            </header>

            {stage === 'category' &&
                <ServiceCategories order={order} onCategoryChoose={onCategoryChoose} />
            }

            {stage === 'service' &&
                <ServicesList services={servicesArr} order={order} onServiceChoose={onServiceChoose} onActivateService={handleActivateService} />
            }

            {stage === 'time' &&
                <TimeChooser />
            }
        </div>
    );
}

export default Stage;