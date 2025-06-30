import {  Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='' element={<Navigate to="/login" />} /> */}
    </Routes>
  )
}

export default AppRoutes
