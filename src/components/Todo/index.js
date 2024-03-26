import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.state ={
            newTodo: '',
            todoList: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
    }

    handleInputChange(event) {
        this.setState({newTodo: event.target.value});
    }

    addTodo() {
        if (this.state.newTodo.trim() !== '') {
            let newTodo = {
                id: uuidv4(),
                name: this.state.newTodo,
                completed: false
            }
            this.setState({todoList: [...this.state.todoList, newTodo]});
            this.setState({newTodo: ''});
        }
    }

    changeTodo(id) {
        let todoList = this.state.todoList;
        todoList.map((item) => {
            if (item.id === id) {
               item.completed = !item.completed;
            }
            return item;
        });
        let completed = todoList.filter(item => item.completed === true);
        let newTodoList = completed.concat(todoList.filter(item => item.completed === false));
        this.setState({todoList: newTodoList});
    }

    render() {
        return (
            <>
                <TodoList
                    list={this.state.todoList}
                    onClick={this.changeTodo}
                />
                <TodoInput
                    value={this.state.newTodo}
                    onChange={this.handleInputChange}
                    onClick={this.addTodo}
                />
            </>
        );
    }
}