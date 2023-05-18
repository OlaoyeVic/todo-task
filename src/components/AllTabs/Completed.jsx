import '../styles/completed.scss'
import deleteIcon from '../../assets/delete.png'

const Completed = ({ items, newItem, handleCheckbox, handleDeleteAll }) => {
    const completedItems = items.filter((item) => item.checked)
    return (
        <div className="completed">
            <div className="checkbox">
                <ul>
                    {completedItems.map((item, index) => (
                        <li key={`completedItems-${index}`}>
                            <form>
                                <input 
                                    type='checkbox' 
                                    checked={item.checked} 
                                    onChange={() => handleCheckbox(index)} 
                                />
                                {item.text}
                            </form>
                            <span>
                                <img src={deleteIcon} alt='delete' />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Completed