import Filterusers from './pages/FilterUsers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FilterUsers2 from './pages/FilterUsers2'
import FilterUsers3 from './pages/FilterUsers3'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Reports from './pages/Reports'
import NotFound from './pages/NotFound'

function App() {
  
  return (
    <>
      {/* Query params */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/filter" element={<Filterusers />}></Route>
          <Route path="/filter2" element={<FilterUsers2 />}></Route>
          <Route path="/filter3" element={<FilterUsers3 />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* Nested Dashboard Routes */}
      <BrowserRouter>
        <Routes>
          <Route path='dashboard' element={ <Dashboard /> }>
            <Route index element={ <Profile /> }></Route>

            <Route path='profile' element={ <Profile /> }></Route>
            <Route path='settings' element={ <Settings /> }></Route>
            <Route path='reports' element={ <Reports /> }></Route>
          </Route>

          <Route path='*' element={ <NotFound /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
