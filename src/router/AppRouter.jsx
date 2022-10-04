import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginRoutes } from '../auth/routes/LoginRoutes'
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth/*' element={<LoginRoutes />}/>
      <Route path='/dashboard' element={<DashboardRoutes />}/>
      <Route path='/*' element={<Navigate to='/auth' />}/>
    </Routes>
  )
}
