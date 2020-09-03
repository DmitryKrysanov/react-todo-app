import React from 'react';
import classes from './TodoListItem.module.scss';
import { ITodo } from '../../Todo/Todo';
import { todoIsDone, todoIsImportant, deleteTodo } from '../../../redux/actions/todoActions';
import { connect } from 'react-redux';

interface ConnectedProps {
    todo: ITodo,
}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const TodoListItem = (props: any): JSX.Element => {

    const { title, isDone, isImportant, todoId } = props.todo

    const onDelete = () => {
        props.deleteTodo(todoId)
    }

    const onDone = () => {
        props.todoIsDone(todoId, isDone)
    }

    const onImportant = () => {
        props.todoIsImportant(todoId, isDone)
    }
    
    return (
        <div className={classes.todo_class_list_item}>
            <div className={classes.item_title}>
                {isImportant ?
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2H10V16H13V2ZM13 19H10V22H13V19Z" fill="#db0000" />
                    </svg> : null}
                <p className={isDone ? classes.is_done : ''}>{title}</p>
            </div>
            <h4></h4>
            <div className={classes.item_btns}>
                <button
                    className="btn btn__icon btn__icon__important"
                    onClick={onImportant}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2H10V16H13V2ZM13 19H10V22H13V19Z" />
                    </svg>
                </button>
                <button
                    className="btn btn__icon btn__icon__done"
                    onClick={onDone}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3907 4L8.35202 16.0386L3.60934 11.296L2 12.9053L8.35202 19.2573L22 5.60934L20.3907 4Z" />
                    </svg>
                </button>
                <button
                    className="btn btn__icon btn__icon__delete"
                    onClick={onDelete}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5555 2L15.6667 3.11109H19.5555V5.33333H4V3.11109H7.88885L9 2H14.5555ZM7.33332 21.9999C6.10551 21.9999 5.11108 21.0055 5.11108 19.7777V6.44434H18.4444V19.7777C18.4444 21.0055 17.45 21.9999 16.2222 21.9999H7.33332Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    todoIsDone: (todoId: string, state: boolean) => {
        return dispatch(todoIsDone(todoId, state))
    },
    todoIsImportant: (todoId: string, state: boolean) => {
        return dispatch(todoIsImportant(todoId, state))
    },
    deleteTodo: (todoId: string) => {
        return dispatch(deleteTodo(todoId))
    },
});

export default connect(null, mapDispatchToProps)(TodoListItem);
