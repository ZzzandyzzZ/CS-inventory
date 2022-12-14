import { Grid } from '@mui/material';

import PeopleIcon from '@mui/icons-material/People';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { ResumeCard } from '../components/ResumeCard';
import { classroomPathName, objectsPathName, usersPathName } from '../../../constants/constants';
import { useGetUsersQuery } from '../../../store/api/user';
import { useGetAssetsQuery } from '../../../store/api/asset/assetApi';
import { useGetlocationsQuery } from '../../../store/api/location/locationApi';

export function HomeView() {
  const { data: users = [] } = useGetUsersQuery();
  const { data: assets = [] } = useGetAssetsQuery();
  const { data: locations = [] } = useGetlocationsQuery();

  return (
    <Grid container spacing={10}>
      <ResumeCard Icon={PeopleIcon} title="Usuarios" totalNumber={users?.length} pathName={usersPathName} />
      <ResumeCard Icon={ViewInArIcon} title="Objetos" totalNumber={assets?.length} pathName={objectsPathName} />
      <ResumeCard Icon={MapsHomeWorkIcon} title="Aulas" totalNumber={locations?.length} pathName={classroomPathName} />
    </Grid>
  );
}

// export const HomeView = () => {
//   return (
//     <Grid container spacing={3}>
//       {/* Chart */}
//       <Grid item xs={12} md={8} lg={9}>
//         <Paper
//           sx={{
//             p: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 240,
//           }}
//         >
//           <Chart />
//         </Paper>
//       </Grid>
//       {/* Recent Deposits */}
//       <Grid item xs={12} md={4} lg={3}>
//         <Paper
//           sx={{
//             p: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 240,
//           }}
//         >
//           <Deposits />
//         </Paper>
//       </Grid>
//       {/* Recent Orders */}
//       <Grid item xs={12}>
//         <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
//           <Orders />
//         </Paper>
//       </Grid>
//     </Grid>
//   )
// }
