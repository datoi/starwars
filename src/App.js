// import RegistrationPage from "./components/registration/RegistrationPage";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Login from "./components/login/Login";
import HomePage from "./components/homepage/HomePage";
// import TodoList from "./components/TodoList";

function App() {
    return (
        // <BrowserRouter basename={"/"}>
        //     <Routes>
        //         <Route path='/registration' element={<RegistrationPage/>}/>
        //         <Route path='/todoitem' element={<TodoList/>}/>
        //         <Route path='/login' element={<Login/>}/>
        //         <Route path='/homepage' element={<HomePage/>}/>
        //     </Routes>
        // </BrowserRouter>
        <div>
            <HomePage/>
        </div>
    );
}

export default App;
