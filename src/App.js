import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import SigninPage from './pages/signin'
import Home from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </Router>
  )
}

export default App
