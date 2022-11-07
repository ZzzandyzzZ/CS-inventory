import PropTypes from 'prop-types';

import { DashboardLayout } from '../layouts/DashboardLayout';

export function DashboardPage({ View }) {
  return (
    <DashboardLayout>
      <View />
    </DashboardLayout>
  );
}

DashboardPage.propTypes = {
  View: PropTypes.func.isRequired,
};
