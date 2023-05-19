import '../styles/completed.scss'
import deleteIcon from '../../assets/delete.png'

const Completed = ({ items, setItems, newItem, handleCheckbox, handleDeleteAll }) => {
    const completedItems = items.filter((item) => item.checked)

    // const handleDeleteItem = (index) => {
    //     setItems(prevItems => prevItems.filter((item, i) => i !== index))
    //     // localStorage.setItem('todoItems', JSON.stringify(updatedItems))
    // }

    const handleDeleteItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        localStorage.setItem('todoItems', JSON.stringify(updatedItems));
      }

    const handleDeleteCompleted = () => {
        const updatedItems = items.filter((item) => !item.checked)
        setItems(updatedItems)
        localStorage.setItem('todoItems', JSON.stringify(updatedItems))
      }

    return (
        <div className="completed">
            <div className="checkbox">
                <ul>
                    {completedItems.map((item, index) => (
                        <li 
                            key={`completedItems-${index}`}
                            style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
                        >
                            <form>
                                <input 
                                    type='checkbox' 
                                    checked={item.checked} 
                                    onChange={() => handleCheckbox(index)} 
                                />
                                {item.text}
                            </form>
                            <span>
                                <img src={deleteIcon} alt='delete' onClick={() => handleDeleteItem(index)} />
                            </span>
                        </li>
                    ))}
                </ul>
                <div>
                    {completedItems.length > 0 && (
                        <button
                            type='submit'
                            onClick={handleDeleteCompleted}
                        >
                            Delete All
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Completed