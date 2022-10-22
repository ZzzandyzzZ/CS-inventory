import { DashboardLayout } from '../layouts/DashboardLayout';
import { HomeView } from '../views/HomeView';

export const DashboardPage = ({ View }) => {
  return (
    <DashboardLayout>
      <View />
    </DashboardLayout>
  );
}
