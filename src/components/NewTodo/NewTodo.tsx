import React, { useState } from 'react';
import classes from './NewTodo.module.scss';
import { ITodo, INewTodo } from '../Todo/Todo';

// interface ComponentProps {
//     addTodo: (todo: any) => void
// }

const NewTodo = (props: any) => {

    const [title, setTitle] = useState('')

    const handleTitleChange = (event: { currentTarget: { value: string; }; }): void => {
        setTitle(event.currentTarget.value)
    }

    const onSubmit = (event: { preventDefault: () => void}) => {
        event.preventDefault()
        const newTodo = {
            title,
            isDone: false,
            isImportant: false,
        }
        props.addTodo(newTodo)
    }

    return (
        <div className={classes.new_todo} data-test="NewTodo">
            <form onSubmit={onSubmit}>
            <div className={classes.input}>
                <input
                    name="title"
                    className='input'
                    id="title"
                    placeholder="New todo"
                    type="text"
                    onChange={handleTitleChange}
                    value={title}
                    />
            </div>
                <button
                    disabled={title.trim() ? false : true }
                    className='btn btn__primary'
                    type="submit"
                    >
                    Add
                </button>
            </form>
        </div>
    );
}

export default NewTodo;
