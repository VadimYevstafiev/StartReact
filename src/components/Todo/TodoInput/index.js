export function TodoInput(props) {
    return (
        <>
            <div >
                <h1> Create Todo</h1>
                <input 
                    type="text"
                    name="todo"
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="Todo"
                />
                <button onClick={props.onClick}>Add</button>
            </div>
        </>
    );
}