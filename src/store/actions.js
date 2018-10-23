import { SET_TODO, ADD_TODO, DELETE_TODO, SET_MESSAGE } from './actionTypes'

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

export const setMessage = text => ({
  type: SET_MESSAGE,
  text
})