import {
    ADD_TODO,
    TODO_IS_DONE,
    TODO_IS_IMPORTANT,
    DELETE_TODO,
    ADD_TODO_ERROR,
    RESET_TODOS,
    GET_TODOS,
    TODO_IS_DONE_ERROR,
    TODO_IS_IMPORTANT_ERROR,
    DELETE_TODO_ERROR,
    GET_TODOS_ERROR
} from './../../constants/todoActions';
import { db } from '../../config/fbConfig';
import Cookies from 'js-cookie';
import { SHOW_LOADER, HIDE_LOADER } from '../../constants/loaderActions';


const fetchTodos = (uid: any) => { 
    return db.collection('users').doc(uid).collection('todos').get()   
}

export const getTodos = () => {

    const uid = Cookies.get('uid')

    return async (dispatch: any) => {
        dispatch({ type: SHOW_LOADER })
        await fetchTodos(uid).then((resp: any) => {
            const data = resp.docs.map((todo: any) => todo.data());
            dispatch({ type: GET_TODOS, data })
            dispatch({ type: HIDE_LOADER })
        }).catch((err: any) => {
            dispatch({ type: GET_TODOS_ERROR, err })
        });
    }
}

export const addTodo = (payload: any) => {

    const uid = Cookies.get('uid')

    return async (dispatch: any) => {
        dispatch({ type: SHOW_LOADER })
        db.collection('users').doc(uid).collection('todos').add({ ...payload })
            .then((docRef) => {
                docRef.update({
                    todoId: docRef.id,
                });
            }).then(() => {
                dispatch({ type: ADD_TODO, payload })
                // fetchTodos(uid).then((resp: any) => {
                //     const data = resp.docs.map((todo: any) => todo.data());
                //     dispatch({ type: GET_TODOS, data })
                // }).catch((err: any) => {
                //     dispatch({ type: GET_TODOS_ERROR, err })
                // });
            }).then(() => {
                dispatch({ type: HIDE_LOADER })
            }).catch((err: any) => {
                dispatch({ type: ADD_TODO_ERROR, err })
            });
    }
}

export const resetTodos = () => {
    return {
        type: RESET_TODOS
    };
}

export const todoIsDone = (todoId: string, state: boolean) => {
    const uid = Cookies.get('uid')
    return async (dispatch: any) => {
        db.collection('users').doc(uid).collection('todos').doc(todoId).update({
            isDone: !state
        }).then(() => {
            dispatch({ type: TODO_IS_DONE, todoId })
        }).catch((err: any) => {
            dispatch({ type: TODO_IS_DONE_ERROR, err })
        })
    }
}

export const todoIsImportant = (todoId: string, state: boolean) => {
    const uid = Cookies.get('uid')
    return async (dispatch: any) => {
        db.collection('users').doc(uid).collection('todos').doc(todoId).update({
            isImportant: !state
        }).then(() => {
            dispatch({ type: TODO_IS_IMPORTANT, todoId })
        }).catch((err: any) => {
            dispatch({ type: TODO_IS_IMPORTANT_ERROR, err })
        })
    }
}

export const deleteTodo = (todoId: string) => {
    const uid = Cookies.get('uid')
    return async (dispatch: any) => {
        db.collection('users').doc(uid).collection('todos').doc(todoId).delete()
        .then(() => {
            dispatch({ type: DELETE_TODO, todoId })
        }).catch((err: any) => {
            dispatch({ type: DELETE_TODO_ERROR, err })
        })
    }
}
