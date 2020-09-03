import React, { useEffect } from 'react';
import NewTodo from '../NewTodo/NewTodo';
import TodoList from '../TodoList/TodoList';
import Header from '../Header/Header';
import classes from './Todo.module.scss';
import { connect } from 'react-redux';
import { addTodo, getTodos } from '../../redux/actions/todoActions';
import { Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';

export interface INewTodo {
    title: string,
    isDone: boolean,
    isImportant: boolean,
}

export interface ITodo {
    title: string,
    isDone: boolean,
    isImportant: boolean,
    todoId: string,
}

// interface ConnectedProps {
//     auth: any;
//     todos: ITodo[]
// }

// type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const Todo = (props: any): JSX.Element => {

    useEffect(() => {
        props.getTodos()
    }, [])

    const user = {
        img: "https://placehold.it/80",
        firstName: "Dima",
        lastName: "Krysanov",
    }

        return (
            <div className={ classes.todo } data-test="Todo">
                { !props.auth.uid ? <Redirect to='/auth/login'/> : null }
                <Header />
                <div className={ classes.todo_inner }>
                    <div className={ classes.todo_aside }>
                        <Profile user={user}/>
                    </div>
                    <div className={ classes.todo_content }>
                        <NewTodo 
                            addTodo={ props.add_todo } 
                        />
                        <TodoList 
                            todos={ props.todos } 
                            loader={ props.loader } 
                        />
                    </div>
                </div>
            </div>
        );
    }

const mapStateToProps = ( state: any ) => {
    return {
        auth: state.auth,
        todos: state.todo.todos,
        loader: state.loader.isLoad,
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    addTodo: (todo: any) => {
        return dispatch(addTodo(todo))
    },
    getTodos: () => {
        return dispatch(getTodos())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
