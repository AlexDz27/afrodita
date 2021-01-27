import React from 'react';

export class AddAttributesButton extends React.Component {
    constructor(props) {
        super(props);

        this.addAttribute = this.addAttribute.bind(this);

        this.state = {attributes: []};
    }

    addAttribute() {
        const name = prompt("Please, enter the name of a new attribute:");
        if (name === '') return;
        
        this.setState({attributes: [...this.state.attributes, {name}]});
    }

    render() {
        const attributesTemplate = this.state.attributes.map((attribute) => {
            return (
                <div className="mb-3 col-3" key={attribute.name}>
                    <label htmlFor="attribute" className="form-label">{attribute.name}</label><br/>
                    <input name={'attributes[' + attribute.name + ']'} id="attribute" />
                </div>
            );
        });

        return (
            <div>
                {attributesTemplate}

                <button onClick={this.addAttribute} className="btn btn-primary" type="button">+ Add more attributes</button>
            </div>
        );
    }
}