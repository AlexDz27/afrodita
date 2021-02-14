import React from 'react';
import './Main.scss';
import OrderPane from "./components/OrderPane/OrderPane";
import Stage from "./components/Stage/Stage";

const Main = ({order, stage, onCategoryChoose, onServiceChoose, onNextClick, onPrevClick}) => {
    return (
        <div className="main container">
            <Stage stage={stage} order={order} onCategoryChoose={onCategoryChoose} onServiceChoose={onServiceChoose} />

            <div className="stage__buttons-container">
                {stage !== 'category' &&
                    <button className="stage-button stage-button--prev" onClick={onPrevClick}>
                        Back
                    </button>
                }
                <button disabled={order.category === null} onClick={onNextClick}
                        className="next-button main__next-button">Next
                </button>
            </div>

            <OrderPane order={order}/>
        </div>
    );
}

export default Main;