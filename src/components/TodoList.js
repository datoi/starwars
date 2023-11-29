import {useState} from "react";
import TodoItem from "./todoitem/TodoItem";

function TodoList() {

    const [add, setAdd] = useState([])
    const [value, setValue] = useState('')
    const [count, setCount] = useState(0)

    const handleChange = (event) => {
        setValue(event.target.value)

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
            />

        </div>
    )
}

export default TodoList