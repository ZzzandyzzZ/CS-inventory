import { Route, Routes } from 'react-router-dom';

import { classroomPathName, objectsPathName, usersPathName, inventoriesPathName } from '../../../constants/constants';
import { DashboardPage } from '../pages/DashboardPage';
import { ClassroomView } from '../views/ClassroomView';
import { HomeView } from '../views/HomeView';
import { ObjectView } from '../views/ObjectView';
import { UserView } from '../views/UserView';
import { InventoryView } from '../views/Inventories';

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path={usersPathName} element={<DashboardPage View={UserView} />} />
      <Route path={inventoriesPathName} element={<DashboardPage View={InventoryView} />} />
      <Route path={`${usersPathName}/list`} element={<DashboardPage View={UserView} />} />
      <Route path={objectsPathName} element={<DashboardPage View={ObjectView} />} />
      <Route path={classroomPathName} element={<DashboardPage View={ClassroomView} />} />
      <Route path="/" element={<DashboardPage View={HomeView} />} />
    </Routes>
  );
}
