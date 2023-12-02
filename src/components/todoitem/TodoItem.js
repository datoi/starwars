import './TodoItem.css'

function TodoItem(props) {
    const {resetClick, showButton, countDown, time, count, handleChange, value, addTodo, add, removeTodo} = props
    return (
        <body>
        <button className='refreshButton' onClick={resetClick}>Refresh</button>
        <div className='front'>
            <div className='App'>
                <h1>Day Plan</h1>

                <div className="container">
                    <input className='input' value={value} onChange={handleChange} type="text"/>
                    <button className='button1' onClick={addTodo}>add</button>
                    <div className='todoList'>
                        {add.map((todo, index) => (
                            <p className='p' key={index}>{todo}
                                <button className='button2' onClick={() => removeTodo(todo)}>X</button>
                            </p>
                        ))}
                    </div>
                    <div className="progress" data-label={`${count * 10}%`}>
          <span className="value" style={{width: `${count * 10}%`}}>
            <span className="percent">{count}</span>
          </span>

                    </div>
                    <p>Maximum 10</p>
                </div>
                <div className='countDown'>
                    {showButton && <button className='button1' onClick={countDown}>Start Plan Timer</button>}
                    <h3>{time} hours remaining</h3>
                </div>

            </div>
        </div>
        </body>
    )
}

export default TodoItem