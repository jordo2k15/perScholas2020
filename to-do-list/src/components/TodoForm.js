import React, {useState} from 'react'

function TodoList(props) {
    const [input, setInput] = useState('')

    const handleChange = E => {
        setInput(E.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        //});
        setInput('');
    
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Add a to do' 
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
        />
        <button className='todo-button'> Add to do</button>
        </form> 
    )
}

export default TodoList
