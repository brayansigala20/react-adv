import { BrowserRouter,Routes,Route,NavLink, Navigate } from 'react-router-dom';
import {Suspense}from "react"

import { routes } from './routes';
  import logo from '../logo.svg';
import Loading from '../01-Lazyload/componets/Loading';

  export const Navigation = () => {
  
    return (
      <Suspense fallback={<Loading/>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {routes.map(rutas=> (
                 <li key={rutas.to}>
                 <NavLink to={rutas.to} className={({isActive})=> isActive? 'nav-active' : ''} >{rutas.name}</NavLink>
               </li>
              ))}
            </ul>
          </nav>

          <Routes>
            <Route>
              {routes.map(({to,path,Component})=>(
                <Route key={to} path={path} element={<Component/>}/>
              ))}
                <Route path='/*' element={ <Navigate to={routes[0].to}/>}/>
            </Route>
          </Routes>
          
        </div>
      </BrowserRouter>
      </Suspense>
    );
  }