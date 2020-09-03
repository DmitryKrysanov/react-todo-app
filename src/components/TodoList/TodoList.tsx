import React, { Fragment } from 'react';
import TodoListItem from './TodoListItem/TodoListItem';
import classes from './TodoList.module.scss';
import { ITodo } from '../Todo/Todo';
import { Loader } from '../Loader/Loader';

interface Props {
    todos: ITodo[],
    loader: boolean,
}

const TodoList = (props: Props) => {

        return (
            <div className={ classes.todo_list } data-test="TodoList">
                { props.loader ? <Loader /> : null }
                { props.todos.map( (todo: ITodo, index: number) => {
                    return (
                        <Fragment key={ index }>
                            <TodoListItem 
                                todo={ todo }
                            />
                        </Fragment>
                    )
                } )}
            </div>
        );
    }

export default TodoList;