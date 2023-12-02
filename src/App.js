import './App.css';
import TodoList from "./components/TodoList";
import RegistrationPage from "./components/registration/RegistrationPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import HomePage from "./components/homepage/HomePage";
// import TodoItem from "./components/todoitem/TodoItem";
// import TodoItem from "./components/todoitem/TodoItem";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/registration'element={<RegistrationPage />}/>
                <Route path='login' element={<Login/>}/>
                <Route path='todoitem' element={<TodoList/>}/>
                <Route path='homepage' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
