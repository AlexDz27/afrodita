import React, {useRef, useState, useEffect} from 'react';

const Service = ({service, onServiceClick, isChosen}) => {
  const _pane = useRef(null);
  const pane = _pane.current;

  let height = pane?.scrollHeight;

  // TODO: refactor. Currently this is a fix for when going back and service is chosen -> inactive pane
  if (height === undefined) height = 200;
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