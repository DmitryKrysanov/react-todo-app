import {
    GET_TODOS,
    ADD_TODO,
    ADD_TODO_ERROR, 
    TODO_IS_DONE,
    TODO_IS_IMPORTANT,
    DELETE_TODO,
    RESET_TODOS,
} from './../../constants/todoActions';
import { ITodo } from '../../components/Todo/Todo';

interface TodosState {
    todos: ITodo[]
}

const initialState = {
    todos: []
}

const toggleIsDone = (todos: ITodo[], todoId: string) => {
    return todos.map(todo => {
        if (todo.todoId === todoId) {
            return {
                ...todo,
                isDone: !todo.isDone
            }
        }
        return todo;
    })
}

const toggleIsImportant = (todos: ITodo[], todoId: string) => {
    return todos.map(todo => {
        if (todo.todoId === todoId) {
            return {
                ...todo,
                isImportant: !todo.isImportant
            }
        }
        return todo;
    })
}

const deleteTodo = (todos: ITodo[], todoId: string) => {
    return todos.filter(todo => {
        return todo.todoId !== todoId;
    })
}

const todoReducer = (state = initialState, action: any): TodosState => {
    switch (action.type) {
        case GET_TODOS: 
            return {
                ...state,
                todos: action.data
            }
           
        case ADD_TODO:
            return { 
                ...state, 
                todos: [
                    ...state.todos, 
                    action.payload
                ] 
            }
        case ADD_TODO_ERROR: 
         console.log("add todo error", action.err) 
        
        case TODO_IS_DONE:
            return { 
                ...state, 
                todos: toggleIsDone(state.todos, action.todoId)
            }
        case TODO_IS_IMPORTANT:
            return {
                ...state,
                todos: toggleIsImportant(state.todos, action.todoId)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: deleteTodo(state.todos, action.todoId)
            }
        case RESET_TODOS:
                return {
                    ...(state = initialState),
                }
        default:
            return state
    }
}

export default todoReducer;
