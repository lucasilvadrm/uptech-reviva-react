import { DefaultPage } from 'pages/DefaultPage';
import Cart from 'pages/Cart';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailsPage from 'pages/Details';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='details/:id' element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}