import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Sidebar from './components/Sidebar';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" exact element ={<Home />} />
          <Route path="/login" exact element ={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
console.log("Fuck you");