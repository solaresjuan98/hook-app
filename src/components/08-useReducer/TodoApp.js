
import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn react',
    done: false
}];

export const TodoApp = () => {

    const [todos] = useReducer(todoReducer, initialState);

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>Todos</h4>

                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">
                                        {i + 1}. {todo.desc}
                                    </p>

                                    <button
                                        className="btn btn-danger"
                                    >
                                        Erase Todo
                            </button>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="col-3">
                    <h4>Add Todo</h4>
                    <hr />

                    <form>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            autoComplete="off"
                        />

                        <button
                            className="btn btn-success mt-3 btn-block"
                        >
                            Add new Todo
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}
