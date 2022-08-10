import { useStore } from "../store/customStore";
import { addTodo, deleteTodo, updateTodo } from "../store/actions";
import { useEffect, useRef, useState } from "react";

function Layout() {
    const [valueInput, setValueInput] = useState('')
    const [isStatus, setIsStatus] = useState(false)
    const [indexTodo, setIndexTodo] = useState(0)
    const inputRef = useRef()
    const [state, dispatch] = useStore()
    const todos = state.todos

    useEffect(() => {
        const elementInput = inputRef.current

        elementInput.onkeyup = (e) => {
            if(e.which === 13) {
                if(isStatus === false) {
                    dispatch(addTodo(valueInput))
                    setValueInput('')
                    inputRef.current.focus()
                }
            }
        }
    }, [valueInput])

    const handleAddTodo = () => {
        if(isStatus) {
            todos.map((todoName, index) => {
                if(indexTodo === index) {
                    dispatch(updateTodo({
                        index,
                        name: valueInput
                    }))
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
            if(index === indexTodo) {
                setValueInput(todoName)
                setIndexTodo(index)
                setIsStatus(true)
                inputRef.current.focus()
            }
        })
    }

    return (
        <div className='todo'>
            <h3 className='todo__title'>Todo App</h3>
            <div className='todo__group'>
                <input 
                    type='text' 
                    className='mr-05' 
                    value={valueInput}
                    placeholder='Nhập tên công việc' 
                    ref={inputRef}
                    onChange={(e) => setValueInput(e.target.value)}
                />
                <div 
                    className='todo__btn todo__btn--add'
                    onClick={handleAddTodo}
                >
                    {isStatus ? <i className="fas fa-check"></i> : <i className="fas fa-plus"></i>}
                    {isStatus ? 'Cập nhật' : 'Thêm'}
                </div>
            </div>
            <div className='todo__list'>
                {
                    todos.map((todo, index) => {
                        return (
                            <div className='todo__item' key={index}>
                                <input type='checkbox' />
                                <p className='todo__item__name'>{todo}</p>
                                <div className='todo__actions'>
                                    <div 
                                        className='todo__btn todo__btn--update mr-05'
                                        onClick={() => handleUpdateTodo(index)}
                                    >
                                        <i className="fas fa-pen"></i>
                                        Sửa
                                    </div>
                                    <div 
                                        className='todo__btn todo__btn--delete'
                                        onClick={() => dispatch(deleteTodo(index))}
                                    >
                                        <i className="fas fa-trash-alt"></i>
                                        Xóa
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Layout;
