import React from 'react';

export class ShowPhoneButton extends React.Component {
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