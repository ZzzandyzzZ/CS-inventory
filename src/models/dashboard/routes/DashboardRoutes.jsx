import { Route, Routes } from 'react-router-dom';

import { classroomPathName, objectsPathName, usersPathName } from '../../../constants/constants';
import { DashboardPage } from '../pages/DashboardPage';
import { ClassroomView } from '../views/ClassroomView';
import { HomeView } from '../views/HomeView';
import { ObjectView } from '../views/ObjectView';
import { UserView } from '../views/UserView';

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path={usersPathName} element={<DashboardPage View={UserView} />} />
      <Route path={objectsPathName} element={<DashboardPage View={ObjectView} />} />
      <Route path={classroomPathName} element={<DashboardPage View={ClassroomView} />} />
      <Route path="/" element={<DashboardPage View={HomeView} />} />
    </Routes>
  );
}
