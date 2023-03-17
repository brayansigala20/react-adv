import {NavLink,Routes,Route, Navigate} from 'react-router-dom'
import {LazyLoad1,LazyLoad2,LazyLoad3} from '../pages'

const LazyLoyaut = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={'lazy1'}>lazy1</NavLink>
        </li>
        <li>
          <NavLink to={'lazy2'}>lazy2</NavLink>
        </li>
        <li>
          <NavLink to={'lazy32'}>lazy32</NavLink>
        </li>
      </ul>

      <Routes>
          <Route path='/lazy1' element={<LazyLoad1/>}/>
          <Route path='/lazy2' element={<LazyLoad2/>}/>
          <Route path='/lazy32' element={<LazyLoad3/>}/>

          <Route path='*' element={<Navigate to='lazy1' replace/>} />
      </Routes>

    </>
  )
}

export default LazyLoyaut