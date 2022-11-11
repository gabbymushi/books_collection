import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import CreateBook from './pages/create-book';
import EditBook from './pages/edit';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedin, setLogin] = useState(true);

  useEffect(() => {
    // fetchAllBooks();
    setLogin(true);
    if (localStorage.getItem('token')) {
      setLogin(true);
    }
  }, [])

  const logout = () => {
    localStorage.clear();
    setLogin(false);
  }

  const login = () => {
    setLogin(true);
  }

  return (
    <div>
      {isLoggedin &&
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/home"} className='nav-link'>Home</Link>
            </li>
            <li>
              <Link to={"/"} className='nav-link' onClick={() => logout()}>Logout</Link>
            </li>
          </div>
        </nav>
      }
      <br />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Login login={login} />} />
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
