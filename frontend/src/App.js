import { Container } from 'react-bootstrap' //new: import react-bootstrap
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom' //new: import react-router-dom


import HomePage from './pages/HomePage'

import ProductPage from './pages/ProductPage'

import CartPage from './pages/CartPage'

import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import ProfilePage  from './pages/ProfilePage'

import ShippingPage  from './pages/ShippingPage'
import PaymentPage  from './pages/PaymentPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'

import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'

import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'




function App() {
  return (
    <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/' element={<HomePage/>} exact />
              <Route path='/product/:id' element={<ProductPage/>} />
              <Route path='/cart/:id?' element={<CartPage/>} />
              
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route path='/profile' element={<ProfilePage/>} />

              <Route path='/shipping' element={<ShippingPage/>} />
              <Route path='/payment' element={<PaymentPage/>} />
              <Route path='/placeorder' element={<PlaceOrderPage/>} />

              <Route path='/order/:id' element={<OrderPage/>} />


              <Route path='/admin/userlist' element={<UserListPage/>} />
              <Route path='/admin/user/:id/edit' element={<UserEditPage/>} />

              <Route path='/admin/productlist' element={<ProductListPage/>} />
              <Route path='/admin/product/:id/edit' element={<ProductEditPage/>} />
              
            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
