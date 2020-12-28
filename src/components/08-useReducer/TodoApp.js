
import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'

/* const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn react',
    done: false
}];
 */

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    /*  return [{
        id: new Date().getTime(),
        desc: 'Learn react',
        done: false
    }] */
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    };


    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }
    //console.log(description);

    const handleAddTodo = ( newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }


    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <h4>Todos</h4>
                    {/* Todo List, todos*/}
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-3"> 
                    <TodoAdd 
                        handleAddTodo = {handleAddTodo}
                    />
                </div>
            </div>
        </div>
    )
}
