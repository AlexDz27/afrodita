import React, {useRef} from 'react';

const Service = ({service, onServiceClick, isChosen}) => {
  const _pane = useRef(null);
  const pane = _pane.current;

  const height = pane?.scrollHeight;
  const paneStyle = isChosen ? {maxHeight: `${height}px`} : {};

  return (
    <div className="service-accordion">
      <button onClick={() => onServiceClick(service.id)} className={`service ${isChosen ? 'active' : ''}`}>
        {service.name}
      </button>
      <div className="service-accordion__pane" style={paneStyle} ref={_pane}>
        <p>
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default Service;