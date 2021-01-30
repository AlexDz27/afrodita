import React from 'react';

export class SearchCatalogInput extends React.Component {
    constructor(props) {
        super(props);

        this.apiUrl = `${window.apiUrl}/search?type=input-ajax&query=`;

        this.handleChange = this.handleChange.bind(this);

        this.state = {results: []};
    }

    handleChange(e) {
        const input = e.target.value;
        if (input === '') {
            this.setState({results: []});

            return;
        }

        const url = this.apiUrl + input;

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({results: data});
            });
    }

    render() {
        const resultsTemplate = this.state.results.map((result) => {
            return (
                <a href={`/catalog/${result.type}s/${result.id}`} className="catalog-search__item" key={result.name}>
                    <img src={result.photo} alt=""/>
                    <b>{result.name}</b>
                </a>
            );
        });

        return (
            <div className="catalog-search">
                <input onChange={this.handleChange} name="query" className="form-control me-2"
                       type="search" placeholder="Search in catalog..."
                />

                <div className="catalog-search__list">
                    {resultsTemplate}
                </div>
            </div>
        );
    }
}