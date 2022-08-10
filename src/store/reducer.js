import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./constants"

const data = JSON.parse(localStorage.getItem('TODOS'))

const initialState = data ? data : {
    todos: []
}

function reducer(state, action) {
    switch(action.type) {
        case ADD_TODO:
            state = {
                todos: [...state.todos, action.payload]
            }
            localStorage.setItem('TODOS', JSON.stringify(state))
            return state
        case DELETE_TODO: 
            const newTodo = [...state.todos]
            newTodo.splice(action.payload, 1)
            state = {
                todos: newTodo
            }
            localStorage.setItem('TODOS', JSON.stringify(state))
            return state
        case UPDATE_TODO:
            const newArray = [...state.todos]
            newArray.splice(action.payload.index, 1, action.payload.name)
            state = {
                todos: newArray
            }
            localStorage.setItem('TODOS', JSON.stringify(state))
            return state
        default:
            throw Error('Invalid action...')
    }
}

export { initialState }
export default reducer