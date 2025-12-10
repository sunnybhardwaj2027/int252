import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Users from "./pages/Users"
import Navbar from "./pages/Navbar"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
