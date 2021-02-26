import React, {forwardRef, useState} from 'react';
import StageServiceCategory from './StageServiceCategory';
import StageService from './StageService';
import StageContactInfo from './StageContactInfo';
import StageTime from './StageTime';

const Stage = forwardRef((props, ref) => {
  const STAGE = {
    SERVICE_CATEGORY: 'serviceCategory',
    SERVICE: 'service',
    TIME: 'time',
    CONTACT_INFO: 'contactInfo'
  };

  const [areRequiredFieldsFilled, setAreRequiredFieldsFilled] = useState(false);
  const {
    order,
    currentStage,
    contactInfo,
    loadingOnSubmit,
    onNextClick,
    onBackClick,
    onServiceCategoryClick,
    onServiceClick,
    onTimeChoose,
    setContactInfo,
    onOrderSubmit
  } = props;
  
  const isStageItemChosen = order.details[currentStage] !== null;
  const isLastStage = currentStage === STAGE.CONTACT_INFO;

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

        {currentStage === STAGE.TIME && <StageTime onTimeChoose={onTimeChoose} />}

        {currentStage === STAGE.CONTACT_INFO &&
          <StageContactInfo
            contactInfo={contactInfo}
            loadingOnSubmit={loadingOnSubmit}
            setContactInfo={setContactInfo}
            setAreRequiredFieldsFilled={setAreRequiredFieldsFilled}
          />
        }
      </div>

      <div className="stage__buttons">
        {currentStage !== 'serviceCategory' &&
          <button
            onClick={onBackClick}
            className="stage-button stage-button-back stage__stage-button-back"
            disabled={loadingOnSubmit}
          >
            Back
          </button>
        }

        {!isLastStage &&
          <button
            onClick={onNextClick}
            disabled={!isStageItemChosen}
            className="stage-button stage-button-next stage__stage-button-next"
          >
            Next
          </button>
        }

        {isLastStage &&
          <button
            onClick={onOrderSubmit}
            disabled={!areRequiredFieldsFilled || loadingOnSubmit}
            className="stage-button stage-button-submit"
          >
            Submit
          </button>
        }
      </div>
    </div>
  );
})

export default Stage;