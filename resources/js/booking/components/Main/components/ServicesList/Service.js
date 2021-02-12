import React, {useState, useRef} from 'react';

const Service = ({service, order, onServiceChoose}) => {
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
            <div className="service-accordion">
                <button onClick={onServiceChoose} className={`service ${order.service === service.name ? 'active' : ''}`}>
                    {service.name}
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