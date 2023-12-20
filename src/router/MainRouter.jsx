import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBarComponents/NavBar'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Product from '../pages/Product'

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<Category />}/>
        <Route path="/item/:id" element={<Product />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter