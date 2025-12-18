import Filterusers from './pages/FilterUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilterUsers2 from './pages/FilterUsers2'
import FilterUsers3 from './pages/FilterUsers3'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/filter" element={<Filterusers />}></Route>
          <Route path="/filter2" element={<FilterUsers2 />}></Route>
          <Route path="/filter3" element={<FilterUsers3 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
