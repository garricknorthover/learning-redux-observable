import { changeFormText, addTodo } from './actions'
import reducer from './reducer'

describe('the store', () => {
  it('handles no input ', () => {
    expect(reducer({}, {})).toEqual({})
  })
})

describe('handles input of text from object', () => {
  it('imputs one character', () => {
    expect(
      reducer(
        {},
        {
          text: 'd',
          type: 'CHANGE_FORM_TEXT'
        }
      )
    ).toEqual({ formInput: 'd' })
  })
})

describe('handles input of text from action function', () => {
  it('imputs one character', () => {
    expect(reducer({}, changeFormText('d'))).toEqual({ formInput: 'd' })
  })
})

describe('adds a todo', () => {
  it('adds a todo', () => {
    expect(reducer({ todos: [] }, addTodo('this is a todo', 4))).toEqual({
      todos: [{ text: 'this is a todo', date: 4 }]
    })
  })
})

describe('adds another todo', () => {
  it('adds another todo', () => {
    expect(
      reducer(
        { todos: [{ text: 'this is a todo', date: 4 }] },
        addTodo('this is another todo', 5)
      )
    ).toEqual({
      todos: [
        { text: 'this is a todo', date: 4 },
        { text: 'this is another todo', date: 5 }
      ]
    })
  })
})
