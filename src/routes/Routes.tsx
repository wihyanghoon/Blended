import { BrowserRouter, Routes, Route } from 'react-router-dom'


// component
import Header from '../components/Header'

// page
import Home from '../page/Home'
import Gradient from '../page/Gradient'
import Button from '../page/Button'

const routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/gradient" element={<Gradient />}/>
        <Route path="/" element={<Button />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default routes