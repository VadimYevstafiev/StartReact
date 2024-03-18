import { Component } from "react";
import { SmileItem } from "./SmileItem";
import { ShowResults } from "./ShowResults";

export class SmileList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    
        for (let i = 0; i < props.count; i++) {
            this.state.items[i] = {
                id: i,
                href: `./assets/images/smile_${i}.png`,
                rating: 0,
                handler: () => this.handleClick(i)
            };            
        }
    }

    handleClick(number) {
        const items = this.state.items.slice();

        items[number].rating++;

        this.setState({
            items: items
        });
    }

    render() {
        return (
            <> 
                <div>
                    <table className="App-table">
                        <tbody>
                            <tr>
                                {this.state.items.map(function (item) {
                                    return (
                                        <td key={item.id} onClick={() => item.handler()}>
                                            <SmileItem href={item.href} rating={item.rating} />
                                        </td>
                                    );
                                } )}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ShowResults items={this.state.items}/>
            </>
        );
    }
}