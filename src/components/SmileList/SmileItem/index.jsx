import { Component } from "react";

export class SmileItem extends Component {
    render() {
        return (
            <>
                <table>
                    <tbody>
                        <tr><td className="App-td">
                            <img onClick={this.props.onClick} className="App-smile" src={this.props.href} alt=""/>
                        </td></tr>
                        <tr><td className="App-td">
                            <div className="App-rate">{this.props.rating}</div>
                        </td></tr>
                    </tbody>
                </table>
            </>
        );
    }
}