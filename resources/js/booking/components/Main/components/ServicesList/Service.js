import React, {useRef} from 'react';

const Service = ({active, onClick, service, order, onServiceChoose, onActivateService}) => {
    const pane = useRef(null);

    const handlePaneClick = () => {
        const otherPanes = document.querySelectorAll('.service-accordion__pane');
        otherPanes.forEach((pane) => {
            pane.style.maxHeight = 0;
        });

        pane.current.style.maxHeight = pane.current.scrollHeight + 'px';
    }

    return (
        <div onClick={handlePaneClick}>
            <div className="service-accordion" onClick={() => onActivateService(service.name)}>
                <button onClick={onServiceChoose} className={`service ${order.service === service.name ? 'active' : ''}`}>
                    {service.name}. Am I active: {active}
                </button>
                <div className="service-accordion__pane" ref={pane}>
                    <p>
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Service;