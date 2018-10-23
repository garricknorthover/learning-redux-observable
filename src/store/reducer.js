import { ADD_TODO, SET_TODO, DELETE_TODO, SET_MESSAGE } from './actionTypes'
import { combineReducers } from 'redux'

export function todos (state = [], action) {
  switch (action && action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          todo: action.todo,
          date: action.date
        }
      ]

    case DELETE_TODO:
      return state.filter(todo => todo.date !== action.date)

    default:
      return state
  }
}

export function formData (state = { todo: '' }, action) {
  switch (action && action.type) {
    case SET_TODO:
      return { ...state, todo: action.todo }
    default:
      return state
  }
}
export function message (state = { message: '' }, action) {
  switch (action && action.type) {
    case SET_MESSAGE:
      return { ...state, text: action.text }
    default:
      return state
  }
}

const reducer = combineReducers({
  todos,
  formData,
  message
})

export default reducer
