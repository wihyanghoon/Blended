import { BrowserRouter, Routes, Route } from 'react-router-dom'


// component
import Header from '../components/Header'

// page
import Gradient from '../page/Gradient'
import How from '../page/How'

const routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Gradient />}/>
        <Route path="/howto" element={<How />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default routes