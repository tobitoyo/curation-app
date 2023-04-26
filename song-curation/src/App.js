import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/userLogin";
import Register from './components/registerUser'

const App = () => {
  return (
    <div >
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
