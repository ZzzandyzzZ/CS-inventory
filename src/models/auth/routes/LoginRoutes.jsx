import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';

export function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
