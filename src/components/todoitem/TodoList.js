import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function TodoList() {
    const [add, setAdd] = useState([]);
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(24);
    const [showButton, setShowButton] = useState(true);
    useEffect(() => {
        const savedAdd = JSON.parse(localStorage.getItem("todos")) || [];
        const savedCountdown = JSON.parse(localStorage.getItem("countdown")) || {time: 24, showButton: true};
        setAdd(savedAdd);
        setCount(savedAdd.length);
        setTime(savedCountdown.time);
        setShowButton(savedCountdown.showButton);
    }, []);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const addTodo = () => {
        if (add.length < 6 && value.length > 0) {
            const newTodos = [...add, value];
            setAdd(newTodos);
            setValue("");
            setCount(newTodos.length);
            localStorage.setItem("todos", JSON.stringify(newTodos));
        }
    };
    const removeTodo = (todoToRemove) => {
        const newTodo = add.filter((todo) => todo !== todoToRemove);
        setAdd(newTodo);
        setCount(newTodo.length);
        localStorage.setItem("todos", JSON.stringify(newTodo));
    };
    const countDown = () => {
        setTimeout(() => {
            const timer = setInterval(() => {
                setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
            }, 2000 * 30 * 24);

            setTimeout(() => {
                clearInterval(timer);
                setAdd([]);
                setCount(0);
                setShowButton(true);
                setTime(24);
                localStorage.removeItem("todos");
                localStorage.setItem("countdown", JSON.stringify({time: 24, showButton: true}));
            }, 2000 * 30 * 24);
        }, 0);
        setShowButton(!showButton);
        localStorage.setItem("countdown", JSON.stringify({time, showButton: !showButton}));
    };
    const resetClick = () => {
        localStorage.clear();
        setAdd([]);
        setCount(0);
        setShowButton(true);
        setTime(24);
    };
    const navigate = useNavigate()
    const homeClick = () => {
        navigate('/starwars')
    }
    return {
        handleChange,
        value,
        addTodo,
        add,
        removeTodo,
        count,
        time,
        countDown,
        showButton,
        resetClick,
        homeClick
    };

}

export default TodoList;