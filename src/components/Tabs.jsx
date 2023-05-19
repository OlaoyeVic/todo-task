import { useEffect, useState } from 'react';
import './styles/tabs.scss'
import All from './AllTabs/All'
import Active from './AllTabs/Active'
import Completed from './AllTabs/Completed';

const Tabs = () => {
    const [activeIndex, setActiveIndex] = useState(1)
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')


    const handleClick = (index) => setActiveIndex(index)
    const checkActive = (index, className) => activeIndex === index ? className : ""

    const handleAddItem = () => {
        if(newItem.trim() !== '') {
            const updatedItems = [...items, { text: newItem, checked: false }]
            setItems(updatedItems)
            localStorage.setItem('todoItems', JSON.stringify(updatedItems))
            setNewItem('')
            // setItems([...items, {text: newItem, checked: false}])
            // setItems((prevItems) => [...prevItems, {text: newItem, checked: false}])
            // localStorage.setItem('todoItems', JSON.stringify(updatedItems))
            // setNewItem('')
        }
    }

    const handleDeleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !=id
            })
        })
    }

    const handleDeleteAll = () => {
        setItems([])
        localStorage.removeItem('todoItems')
    }

    const handleCheckbox = (index) => {
        const updatedItems = [...items]
        updatedItems[index].checked = !updatedItems[index].checked
        setItems(updatedItems)
        localStorage.setItem('todoItems', JSON.stringify(updatedItems))
    }

    useEffect(() => {
        const storedItems = localStorage.getItem('todoItems')
        console.log('Retrieved items from local storage:', storedItems)
        if (storedItems) {
            setItems(JSON.parse(storedItems))
        }
    }, [])

    return (
        <>
            <div className="tabs">
                <button
                    className={`tab ${checkActive(1, "active")}`}
                    onClick={
                        () => handleClick(1)

                    }
                >
                    All
                </button>
                <button
                    className={`tab ${checkActive(2, "active")}`}
                    onClick={() => handleClick(2)}
                >
                    Active
                </button>
                <button
                    className={`tab ${checkActive(3, "active")}`}
                    onClick={() => handleClick(3)}
                >
                    Completed
                </button>
            </div>
            <div className="panels">
              <div className={`panel ${checkActive(1, "active")}`}>
                <All 
                    items={items}
                    setNewItem={setNewItem}
                    newItem={newItem} 
                    handleAddItem={handleAddItem} 
                    handleCheckbox={handleCheckbox} 
                />
              </div>
              <div className={`panel ${checkActive(2, "active")}`}>
                <Active 
                    items={items}
                    setNewItem={setNewItem}
                    newItem={newItem} 
                    handleAddItem={handleAddItem} 
                    handleCheckbox={handleCheckbox} 
                />
              </div>
              <div className={`panel ${checkActive(3, "active")}`}>
                <Completed 
                    items={items}
                    setItems={setItems}
                    setNewItem={setNewItem}
                    newItem={newItem}
                    handleCheckbox={handleCheckbox}
                    handleDeleteAll={handleDeleteAll} 
                />
              </div>
            </div>
        </>
    )
}
export default Tabs