import React from 'react';
import ReactDOM from 'react-dom';

class ShowPhoneBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isPhoneShown: false };
    }

    render() {
        if (this.state.isPhoneShown) {
            const { phone } = this.props;

            return (
                <a href={'tel:' + phone} style={{display: 'inline-block', color: '#fff', width: 170, marginTop: 8}}>
                    { phone }
                </a>
            );
        }

        return (
            <button className="btn btn-warning"
                    type="button"
                    style={{width: 170, marginRight: 35}}
                    onClick={() => this.setState({ isPhoneShown: true })}
            >
                Show our phone
            </button>
        );
    }
}

// Render "Show our number" button in navbar. On click, shows telephone number of the studio.
const container = document.getElementById('show-number-container');
const phone = container.dataset.phone; // get phone data from "data-phone=":phone" in container
ReactDOM.render(<ShowPhoneBtn phone={phone} />, container);

console.log(123123);