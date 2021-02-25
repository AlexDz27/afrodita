import React, {forwardRef} from 'react';
import Stage from './Stage';
import OrderPane from './OrderPane';

const AppContent = forwardRef((props, ref) => {
  const {
    currentStage,
    order,
    contactInfo,
    onNextClick,
    onBackClick,
    onServiceCategoryClick,
    onServiceClick,
    onTimeChoose,
    setContactInfo,
    onOrderSubmit
  } = props;

  return (
    <section className="app__content container text-center">
      <h1 className="display-1 mb-5">Aphrodite booking</h1>

      <Stage
        ref={ref}
        currentStage={currentStage}
        // currentStage={'contactInfo'}
        order={order}
        contactInfo={contactInfo}
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        onServiceCategoryClick={onServiceCategoryClick}
        onServiceClick={onServiceClick}
        onTimeChoose={onTimeChoose}
        setContactInfo={setContactInfo}
        onOrderSubmit={onOrderSubmit}
      />

      <OrderPane details={order.details} />
    </section>
  )
})

export default AppContent;
