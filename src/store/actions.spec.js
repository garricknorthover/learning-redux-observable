import { addTodo, deleteTodo } from './actions'
import { ADD_TODO, DELETE_TODO } from './actionTypes'

describe('test the actions', () => {
  it('give back the right object', () => {
    expect(addTodo('second', 1)).toEqual({
      type: ADD_TODO,
      todo: 'second',
      date: 1
    })
  })
})

describe('emits object for reducer', () => {
  it('sends id from date input', () => {
    expect(deleteTodo(313)).toEqual({ type: DELETE_TODO, date: 313 })
  })
})
