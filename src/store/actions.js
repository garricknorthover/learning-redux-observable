import { SET_TODO, ADD_TODO, DELETE_TODO } from './actionTypes'

export const setTodo = todo => ({
  type: SET_TODO,
  todo
})
export const addTodo = (todo, date) => ({
  type: ADD_TODO,
  todo,
  date
})
export const deleteTodo = date => ({
  type: DELETE_TODO,
  date
})
