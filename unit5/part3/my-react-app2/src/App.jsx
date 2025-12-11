import UserDetail from "./page/UserDetail"
import UserDetail2 from "./page/UserDetail2"
import UserDetail3 from "./page/UserDetail3"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Home Page - Try going to /users/1</h1>} />
          <Route path='/users/:id' element={ <UserDetail /> } />
          <Route path='/users2/:id' element={ <UserDetail2 />} />
          <Route path='/users3/:id' element={ <UserDetail3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
