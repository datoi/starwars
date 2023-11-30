import {useState} from "react";
import TodoItem from "./todoitem/TodoItem";

function TodoList() {
    const [add, setAdd] = useState([])
    const [value, setValue] = useState('')
    const [count, setCount] = useState(0)
    const [time, setTime] = useState(24)
    const [showButton, setShowButton] = useState(true);

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    const countDown = () => {
            setTimeout(() => {
                const timer = setInterval(() => {

                    setTime(prevTime => (prevTime > 0 ? prevTime - 1 : prevTime));
                }, 2000*30*24);
                setTimeout(() => {
                    clearInterval(timer);
                    setAdd([]);
                    setCount(count - count)
                    setShowButton(true)
                    setTime(10)
                }, 2000*30*24);
            }, 0);
        setShowButton(!showButton);

    }
    const addTodo = () => {
        if (add.length < 10) {
            setAdd([...add, value])
            setValue('')
            setCount(count + 1)

        }
    };
    const removeTodo = (todoToRemove) => {
        const newTodo = add.filter(todo => todo !== todoToRemove)
        setAdd(newTodo)
        setCount(count - 1)
    }
    return (
        <div>
            <TodoItem
                handleChange={handleChange}
                value={value}
                addTodo={addTodo}
                add={add}
                removeTodo={removeTodo}
                count={count}
                time={time}
                countDown={countDown}
                showButton={showButton}
            />
        </div>
    )
}

export default TodoList