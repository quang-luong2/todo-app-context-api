import { useStore } from '../store/customStore'
import { addTodo, deleteTodo, updateTodo, activeCheckbox, indexCheckbox } from '../store/actions'
import { useEffect, useRef, useState } from 'react'

function Layout() {
  const [valueInput, setValueInput] = useState('')
  const [indexTodo, setIndexTodo] = useState(0)
  const [indexChecked, setIndexChecked] = useState(0)
  const [isStatus, setIsStatus] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const inputRef = useRef()
  const [state, dispatch] = useStore()
  const todos = state.todos

  const listChecked = JSON.parse(localStorage.getItem('CHECKED'))

  useEffect(() => {
    const elementInput = inputRef.current

    elementInput.onkeyup = (e) => {
      if (e.which === 13) {
        if (isStatus === false) {
          dispatch(addTodo(valueInput))
          setValueInput('')
          inputRef.current.focus()
        }
      }
    }
  }, [valueInput])

  const handleAddTodo = () => {
    if (isStatus) {
      todos.map((todoName, index) => {
        if (indexTodo === index) {
          dispatch(
            updateTodo({
              index,
              name: valueInput,
            })
          )
          setIsStatus(false)
          setValueInput('')
        }
      })
    } else {
      dispatch(addTodo(valueInput))
      setValueInput('')
      inputRef.current.focus()
    }
  }

  const handleUpdateTodo = (index) => {
    todos.map((todoName, indexTodo) => {
      if (index === indexTodo) {
        setValueInput(todoName)
        setIndexTodo(index)
        setIsStatus(true)
        inputRef.current.focus()
      }
    })
  }

  const handleCheckbox = (e, index) => {
    const checked = e.target.checked
    setIsChecked(checked)
    setIndexChecked(index)
    // dispatch(indexCheckbox({index, checked}))
  }

  return (
    <div className='todo'>
      <h3 className='todo__title'>Todo App</h3>
      <div className='todo__group'>
        <input
          type='text'
          className='mr-05'
          value={valueInput}
          placeholder='Nh???p t??n c??ng vi???c'
          ref={inputRef}
          onChange={(e) => setValueInput(e.target.value)}
        />
        <div className='todo__btn todo__btn--add' onClick={handleAddTodo}>
          {isStatus ? <i className='fas fa-check'></i> : <i className='fas fa-plus'></i>}
          {isStatus ? 'C???p nh???t' : 'Th??m'}
        </div>
      </div>
      <div className='todo__list'>
        {todos.length === 0 ? (
          <p className='todo--notice'>Ch??a c?? c??ng vi???c n??o !</p>
        ) : (
          todos.map((todo, index) => {
            return (
              <div className='todo__item' key={index}>
                <input type='checkbox' onChange={(e) => handleCheckbox(e, index)} />
                <p
                  className={`todo__item__name ${
                    index === indexChecked && isChecked ? 'todo__checked' : ''
                  }`}
                >
                  {todo}
                </p>
                <div className='todo__actions'>
                  <div
                    className='todo__btn todo__btn--update mr-05'
                    onClick={() => handleUpdateTodo(index)}
                  >
                    <i className='fas fa-pen'></i>
                    S???a
                  </div>
                  <div
                    className='todo__btn todo__btn--delete'
                    onClick={() => dispatch(deleteTodo(index))}
                  >
                    <i className='fas fa-trash-alt'></i>
                    X??a
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Layout
