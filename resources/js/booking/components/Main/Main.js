import React, {useState} from 'react';
import OrderPane from "./components/OrderPane/OrderPane";
import Stage from "./components/Stage/Stage";

const Main = ({order, onCategoryChoose, stage, onNextStage, onServiceChoose}) => {
    return (
        <div className="main container">
            <Stage stage={stage} order={order} onCategoryChoose={onCategoryChoose} onNextStage={onNextStage} onServiceChoose={onServiceChoose} />

            <button disabled={order.category === null} onClick={onNextStage}
                    className="next-button main__next-button">Next
            </button>

            <OrderPane order={order}/>
        </div>
    );
}

export default Main;