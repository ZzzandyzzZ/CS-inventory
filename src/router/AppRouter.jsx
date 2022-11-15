import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from '../models/dashboard/routes';
import { LoginRoutes } from '../models/auth/routes';
import { CheckingAuth } from '../ui';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/user';

export const AppRouter = () => {
  const { status } = useSelector( state => state.user || {});
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if (!user) return dispatch(logout());
      const {uid, email, displayName, photoURL} = user;
      dispatch(login({uid, email, displayName, photoURL}));
    })
  },[] )

  // if (status === 'checking'){
  //   return <CheckingAuth />
  // }

  return (
    <Routes>
      {
        (status=='logged')
        ? <Route path="/dashboard/*" element={<DashboardRoutes />} />
        : <Route path="/auth/*" element={<LoginRoutes />} />
      }
      <Route path="/auth" element={<Navigate to="/auth" />} />
    </Routes>
  );
}
