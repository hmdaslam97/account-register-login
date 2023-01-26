import './App.css'
import Home from './components/Home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import SignIn from './components/SignIn'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route  path='/register' element={<Register/>} />
          <Route  path='/signin' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
