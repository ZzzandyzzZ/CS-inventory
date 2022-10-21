import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardRoutes } from '../models/dashboard/routes'
import { LoginRoutes } from '../models/auth/routes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<LoginRoutes />}/>
      <Route path='/dashboard/*' element={<DashboardRoutes />}/>
      <Route path='/*' element={<Navigate to='/auth' />}/>
    </Routes>
  )
}
