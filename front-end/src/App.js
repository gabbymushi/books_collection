import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import CreateBook from './pages/create-book';
import EditBook from './pages/edit';

function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/"} className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to={"/register"} className='nav-link'>Create account</Link>
          </li>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add-book' element={<CreateBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
