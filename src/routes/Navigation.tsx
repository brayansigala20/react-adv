import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';
import ShopingPage from '../02-component-patterns/pages/ShopingPage';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav className=''>
            <img src={ logo } alt="React Logo" />
          <ul className=''>
            <li>
              <NavLink to="/" className={({isActive})=> isActive?"nav-active": ''} >Shoping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive})=> isActive?"nav-active": ''} >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=> isActive?"nav-active": ''} >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/users" element={<h1>Users</h1>}/>
          <Route path="/" element={<ShopingPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}