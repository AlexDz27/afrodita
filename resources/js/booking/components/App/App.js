import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import Offer from "../Offer/Offer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const App = () => {
    const [order, setOrder] = useState({
        category: null,
        service: null,
        time: null,
        contactInfo: null
    });

    // TODO: import stager
    const _stager = {
        stages: [
            {name: 'category', index: 0},
            {name: 'service', index: 1},
        ],

        current: {name: 'category', index: 0},

        next() {
            let currentIdx = this.stages.find(stage => this.current.name === stage.name).index;
            let nextIdx = currentIdx + 1;

            const next = this.stages.find(stage => stage.index === nextIdx);
            if (next === undefined) return this.current.name;

            this.current = next;

            console.log(this.current)

            return this.current.name;
        },

        prev() {
            console.log(this.current)
            console.log(this)
            let currentIdx = this.stages.find(stage => this.current.name === stage.name).index;
            let prevIdx = currentIdx - 1;

            const prev = this.stages.find(stage => stage.index === prevIdx);
            if (prev === undefined) return this.current.name;

            this.current = prev;

            return this.current.name;
        }
    };
    const stager = useRef(_stager).current;
    const [stage, setStage] = useState('category');
    const handleNextClick = () => {
        setStage(stager.next());
    }
    const handlePrevClick = () => {
        setOrder({...order, service: null});
        setStage(stager.prev());
    }

    const handleCategoryChoose = (evt) => {
        evt.preventDefault();

        const chosenCategory = evt.target.innerText;

        setOrder({...order, category: chosenCategory});
    }

    const handleServiceChoose = (evt) => {
        evt.preventDefault();

        const chosenService = evt.target.innerText;

        setOrder({...order, service: chosenService});
    }

    const handleOutsideClick = (evt) => {
        // todo: refactor using ref
        const main = document.querySelector('.main');

        if (main.contains(evt.target)) return;

        if (stage === 'category') {
            setOrder({...order, category: null});
        }
    }

    return (
        <div className="app" onClick={handleOutsideClick}>
            <Offer />
            <Header />

            <Main order={order}
                  stage={stage}
                  onCategoryChoose={handleCategoryChoose}
                  onServiceChoose={handleServiceChoose}
                  onNextClick={handleNextClick}
                  onPrevClick={handlePrevClick}
            />

            <Footer />
        </div>
    );
}

export default App;