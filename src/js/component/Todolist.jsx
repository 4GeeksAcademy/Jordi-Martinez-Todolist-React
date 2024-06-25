import React, { useState } from "react";

const Todolist = () => {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = (e) => {
        if (e.key === "Enter") {
            if (inputValue.trim() !== '') {
                setItems((prevItems) => [...prevItems, inputValue]);
                setInputValue('');
            }
        }
    };

    const removeItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className="title">
                <p>ToDo's</p>
            </div>
            <div className="first-page">
                <input
                    className="input-style ms-3"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Add element"
                    onKeyDown={addItem}
                />
                <ul className="ul-style">
                    {items.map((item, index) => (
                        <li key={index}>
                            {item}{' '}
                            <span className="x-style" onClick={() => removeItem(index)}> x </span>
                        </li>
                    ))}
                </ul>
                <p className="ms-3 text-muted">Items ToDo: {items.length}</p>
            </div>
            <div className="second-page">
            </div>
            <div className="third-page">
            </div>
        </>
    );
};

export default Todolist;