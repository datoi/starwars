import './TodoItem.css'
import TodoList from "../TodoList";

const TodoItem = () => {
    const {
        handleChange,
        value,
        addTodo,
        add,
        removeTodo,
        count,
        time,
        countDown,
        showButton,
        resetClick
    } = TodoList();
    return (
        <div>
            <div className='front'>
                <div className='App'>
                    <div className='head'>
                        <button className='refreshButton' onClick={resetClick}>Refresh</button>
                        <h1> Day Plan</h1>
                        {showButton && <button className='button1' onClick={countDown}>Start Timer</button>}
                    </div>
                    <div className="container">
                        <input className='input' value={value} onChange={handleChange} type="text"/>
                        <button className='button1' onClick={addTodo}>add</button>
                        <div className='todoItem'>
                            {add.map((todo, index) => (
                                <p className='todoLists' key={index}>{todo}
                                    <button className='button2' onClick={() => removeTodo(todo)}>X</button>
                                </p>
                            ))}
                        </div>
                        <div className="progress" data-label={`${count * 10}%`}>
                            <div className="value" style={{width: `${count * 17}%`}}>
                                <span className="percent">{count}</span>
                            </div>
                        </div>
                        <p>Maximum 6</p>
                    </div>
                    <div className='countDown'>
                        <h3>{time} hours remaining</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;