import React, {forwardRef} from 'react';
import StageServiceCategory from './StageServiceCategory';
import StageService from './StageService';
import StageContactInfo from './StageContactInfo';

// const Stage = ({order, currentStage, onNextClick, onBackClick, onServiceCategoryClick}) => {
//   const STAGE = {
//     SERVICE_CATEGORY: 'serviceCategory',
//     SERVICE: 'service',
//     PERSONAL_INFO: 'personalInfo'
//   };
//
//   return (
//     <div className="stage">
//       <div className="stage__content">
//         {currentStage === STAGE.SERVICE_CATEGORY && <StageServiceCategory onServiceCategoryClick={onServiceCategoryClick} />}
//
//         {currentStage === STAGE.SERVICE && <StageService category={order.details.serviceCategory} />}
//
//         {currentStage === STAGE.PERSONAL_INFO && <StageContactInfo />}
//       </div>
//
//       <div className="stage__buttons">
//         <button onClick={onBackClick} className="stage-button stage-button-back stage__stage-button-back">
//           Back
//         </button>
//
//         <button onClick={onNextClick} className="stage-button stage-button-next stage__stage-button-next">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

const Stage = forwardRef((props, ref) => {
  const STAGE = {
    SERVICE_CATEGORY: 'serviceCategory',
    SERVICE: 'service',
    PERSONAL_INFO: 'personalInfo'
  };

  const {order, currentStage, onNextClick, onBackClick, onServiceCategoryClick, onServiceClick} = props;

  return (
    <div ref={ref} className="stage">
      <div className="stage__content">
        {currentStage === STAGE.SERVICE_CATEGORY &&
          <StageServiceCategory
            chosenCategoryId={order.details.serviceCategory}
            onServiceCategoryClick={onServiceCategoryClick}
          />
        }

        {currentStage === STAGE.SERVICE &&
          <StageService
            category={order.details.serviceCategory}
            chosenServiceId={order.details.service}
            onServiceClick={onServiceClick}
          />
        }

        {currentStage === STAGE.PERSONAL_INFO && <StageContactInfo />}
      </div>

      <div className="stage__buttons">
        <button onClick={onBackClick} className="stage-button stage-button-back stage__stage-button-back">
          Back
        </button>

        <button onClick={onNextClick} className="stage-button stage-button-next stage__stage-button-next">
          Next
        </button>
      </div>
    </div>
  );
})

export default Stage;