export function TodoList(props) {
    return (
        <>
            <div>
                <h1>Todo List</h1>
                <section>
                    <ul>
                        {props.list.map((item) => {
                            return (
                                <li 
                                    key={item.id}
                                    onClick={() => props.onClick(item.id)}
                                    className={item.completed ? "App-completed" : ''}>
                                    {item.name}
                                </li>
                            );
                            }
                        )}
                    </ul>
                </section>
            </div>
        </>
    );
}