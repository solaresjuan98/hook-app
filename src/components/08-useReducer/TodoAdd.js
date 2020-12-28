import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();

    }

    return (
        <>
            <h4>Add Todo</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    autoComplete="off"
                />

                <button
                    type="submit"
                    className="btn btn-success mt-3 btn-block"
                >
                    Add new Todo
                        </button>

            </form>
        </>
    )
}
