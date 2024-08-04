import { useEffect, useReducer /*, useState*/ } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = [
]

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDeleteTodo = (id) => {
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXx')
        // console.log(id)
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleNewTodo = (todo) => {
        // console.log('ssssssssssssssssssssssssss')
        // console.log(todo)
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
        // console.log({ todo });
    }

    const handleToggleTodo = (id) => {
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXx')
        // console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    {/* <h1>Todo List: {todos.length} <small>Pendientes:{todos.filter(todo => !todo.done).length}</small></h1> */}
    // <h1>Todo List: {todosCount} <small>Pendientes:{pendingTodosCount}</small></h1>
            
    return {
        // counter: counter, // si se trata del mismo nombre, se puede resumir en
        // counter,
        // increment,
        // decrement,
        // reset
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,

        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}