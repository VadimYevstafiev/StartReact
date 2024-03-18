import { SmileList } from "../SmileList";

export const Content = (props) => {
    return (
        <div className="App-content">
            <SmileList count={props.count}/>
        </div>
    );
}