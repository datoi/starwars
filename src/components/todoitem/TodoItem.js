import './TodoItem.css'

const TodoItem = ({resetClick, value, handleChange, addTodo, add, removeTodo, count, countDown, showButton, time}) => {
    return (
        <div>
            <button className='refreshButton' onClick={resetClick}>Refresh</button>
            <div className='front'>
                <div className='App'>
                    <h1>Day Plan</h1>
                    <div className="container">
                        <input className='input' value={value} onChange={handleChange} type="text"/>
                        <button className='button1' onClick={addTodo}>add</button>
                        <div className='todoItem'>
                            {add.map((todo, index) => (
                                <p className='p' key={index}>{todo}
                                    <button className='button2' onClick={() => removeTodo(todo)}>X</button>
                                </p>
                            ))}
                        </div>
                        <div className="progress" data-label={`${count * 10}%`}>
                            <div className="value" style={{width: `${count * 10}%`}}>
                                <span className="percent">{count}</span>
                            </div>
                        </div>
                        <p>Maximum 10</p>
                    </div>
                    <div className='countDown'>
                        {showButton && <button className='button1' onClick={countDown}>Start Plan Timer</button>}
                        <h3>{time} hours remaining</h3>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TodoItem;