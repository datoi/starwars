import './TodoItem.css'
function TodoItem(props) {
    const {count,handleChange,value, addTodo, add, removeTodo} = props
    return (
        <div className="App">
            <h1>Day Plan</h1>
            <input className='input' value={value} onChange={handleChange} type="text" />
            <button className='button1' onClick={addTodo}>add</button>
            {add.map((city, index) => (
                <p className='p' key={index}>{city} <button className='button2' onClick={() => removeTodo(city)}>X</button></p>
            ))}
            <div className="progress" data-label={`${count*10}%`}>
          <span className="value" style={{ width: `${count*10}%` }}>
            <span className="percent">{count}</span>
          </span>
            </div>
            <p>Maximum 10</p>

        </div>
    )
}

export default TodoItem