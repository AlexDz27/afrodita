import React, {forwardRef} from 'react';
import Stage from './Stage';
import OrderPane from './OrderPane';

// const AppContent = ({ currentStage, order, onNextClick, onBackClick, onServiceCategoryClick }) => {
//   return (
//     <section className="app__content container text-center">
//       <h1 className="display-1 mb-5">Aphrodite booking</h1>
//
//       <Stage
//         currentStage={currentStage}
//         order={order}
//         onNextClick={onNextClick}
//         onBackClick={onBackClick}
//         onServiceCategoryClick={onServiceCategoryClick}
//       />
//
//       <OrderPane details={order.details} />
//     </section>
//   );
// }

const AppContent = forwardRef((props, ref) => {
  const {currentStage, order, onNextClick, onBackClick, onServiceCategoryClick, onServiceClick} = props;

  return (
    <section className="app__content container text-center">
      <h1 className="display-1 mb-5">Aphrodite booking</h1>

      <Stage
        ref={ref}
        currentStage={currentStage}
        order={order}
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        onServiceCategoryClick={onServiceCategoryClick}
        onServiceClick={onServiceClick}
      />

      <OrderPane details={order.details} />
    </section>
  )
})

export default AppContent;
