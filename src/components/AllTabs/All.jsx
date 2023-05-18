import { useState } from 'react'
import '../styles/all.scss'

const All = ({ items, setNewItem, newItem, handleAddItem, handleCheckbox }) => {

    const handleClick = (event) => {
        event.preventDefault()
        handleAddItem()
    }

    return (
        <div className="all">
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
                    {items.map((item, index) => (
                        <li 
                            key={`allItems-${index}`}
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
export default All