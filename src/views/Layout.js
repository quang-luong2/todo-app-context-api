import { useStore } from "../store/customStore";

function Layout() {

    const [state, dispatch] = useStore()
    const {todos, valueInput} = state

    console.log(todos, state);

    return (
        <div className='todo'>
            <h3 className='todo__title'>Todo App</h3>
            <div className='todo__group'>
                <input 
                    type='text' 
                    className='mr-05' 
                    value={valueInput}
                    placeholder='Nhập tên công việc' 
                />
                <div 
                    className='todo__btn todo__btn--add'
                >
                    <i className="fas fa-plus"></i>
                    Thêm
                </div>
            </div>
            <div className='todo__list'>
                <div className='todo__item'>
                    <input type='checkbox' />
                    <p className='todo__item__name'>abc abc abc</p>
                    <div className='todo__actions'>
                        <div className='todo__btn todo__btn--update mr-05'>
                            <i className="fas fa-pen"></i>
                            Sửa
                        </div>
                        <div className='todo__btn todo__btn--delete'>
                            <i className="fas fa-trash-alt"></i>
                            Xóa
                        </div>
                    </div>
                </div>
                <div className='todo__item'>
                    <input type='checkbox' />
                    <p className='todo__item__name'>22222222</p>
                    <div className='todo__actions'>
                        <div className='todo__btn todo__btn--update mr-05'>
                            <i className="fas fa-pen"></i>
                            Sửa
                        </div>
                        <div className='todo__btn todo__btn--delete'>
                            <i className="fas fa-trash-alt"></i>
                            Xóa
                        </div>
                    </div>
                </div>
                <div className='todo__item'>
                    <input type='checkbox' />
                    <p className='todo__item__name'>1111111</p>
                    <div className='todo__actions'>
                        <div className='todo__btn todo__btn--update mr-05'>
                            <i className="fas fa-pen"></i>
                            Sửa
                        </div>
                        <div className='todo__btn todo__btn--delete'>
                            <i className="fas fa-trash-alt"></i>
                            Xóa
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;
