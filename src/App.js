import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from "./components/homepage/HomePage";
import TodoItem from "./components/todoitem/TodoItem";
import './App.css'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/starwars' element={<HomePage/>}/>
                <Route path='/todoitem' element={<TodoItem/>}/>
            </Routes>
        </BrowserRouter>

    )
}
export default App;