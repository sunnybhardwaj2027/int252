import Filterusers from './pages/FilterUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilterUsers2 from './pages/FilterUsers2'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/filter" element={<Filterusers />}></Route>
          <Route path="/filter2" element={<FilterUsers2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
