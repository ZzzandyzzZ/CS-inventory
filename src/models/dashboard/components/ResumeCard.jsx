import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { dashboardRootName } from '../../../constants/constants';

export const ResumeCard = ({Icon, title, totalNumber, pathName}) => {
  const navigate = useNavigate();

  return (
    <Grid item
      alignItems='center'
      justifyContent='center'
      xs={4}
    >
      <Card>
        <CardActionArea onClick={() => navigate(`${dashboardRootName}/${pathName}`) }>
          <CardContent align="center">
            <Icon sx={{fontSize:'100px'}}/>
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="h4" align="center">
              { title }
            </Typography>
            <Typography variant="h4" color="text.secondary" align="center">
              { totalNumber }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
