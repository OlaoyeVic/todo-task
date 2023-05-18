import { useState } from 'react'
import '../styles/active.scss'

const Active  = ({ items, setNewItem, newItem, handleAddItem, handleCheckbox }) => {

    const handleClick = (event) => {
        event.preventDefault()
        handleAddItem()
    }

    const activeItems = items.filter((item) => !item.checked)

    return (
        <div className="active">
            <div className="input">
                <>
                    <input 
                        type="text" 
                        placeholder="add details" 
                        value={newItem}
                        onChange={(event) => setNewItem(event.target.value)}
                    />
                </>
                <span>
                    <button 
                        type='submit' 
                        onClick={handleClick}
                    >
                        Add
                    </button>
                </span>
            </div>
            <div className="checkbox">
                <ul>
                    {activeItems.map((item, index) => (
                        <li 
                            key={`activeItems-${index}`}
                            style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
                        >
                            <input 
                                type='checkbox' 
                                checked={item.checked} 
                                onChange={() => handleCheckbox(index)} 
                            />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Active