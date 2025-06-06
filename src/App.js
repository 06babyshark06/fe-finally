import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Lobby from "./pages/Lobby";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/game" element={<Game />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register"element={<Register />} />
    </Routes>
  )
}

export default App;
