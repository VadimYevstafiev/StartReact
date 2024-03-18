import { Component } from "react";

export class ShowResults extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            results: []
        }; 
    }

    handleClick() {
        const items = this.props.items;
        let maxRating = items[0].rating;
        for (let i = 1; i < items.length; i++) {
            if (items[i].rating >= maxRating) maxRating = items[i].rating;
        }
        const results = [];
        for (const item of items) {
            if (item.rating === maxRating) results.push({
                id: item.id,
                href: item.href
            });
        }

        this.setState({
            results: results
        });
    }

    render() {
        return (
            <div>
                <div className="App-div">
                    <button onClick={this.handleClick}>Show Results</button>
                </div >
                <div className="App-winner">
                    {this.state.results.map(function (item) {
                        return (
                            <div key={item.id} className="App-div">
                                <img className="App-smile" src={item.href} alt=""/>
                            </div>
                        );
                    })}
                </div >
            </div>
        );
    }
}