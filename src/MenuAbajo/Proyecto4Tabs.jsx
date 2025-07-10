import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import taxiNYTiempoDeViaje from '../Imagenes/taxiNYTiempoDeViaje.png'
import taxiNYNumeroDeViajesPorDiaDeLaSemana from '../Imagenes/taxiNYNumeroDeViajesPorDiaDeLaSemana.png'
import taxiNYNumeroDeViajesPorHoraDelDia from '../Imagenes/taxiNYNumeroDeViajesPorHoraDelDia.png'
import taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana from '../Imagenes/taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana.png'
import taxiNYVelocidad from '../Imagenes/taxiNYVelocidad.png'
import taxiNYTipoPago from '../Imagenes/taxiNYTipoPago.png'
import taxiNYPropina from '../Imagenes/taxiNYPropina.png'

export default function Proyecto4Tabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: { xs: 320, sm: 980 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Part One" />
          <Tab label="Part Two" />
          <Tab label="Part Three" />
          <Tab label="Part Four" />
          <Tab label="Part Five" />
          <Tab label="Part Six" />
          <Tab label="Part Seven" />
        </Tabs>
      </Box>

      {value == 0?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYTiempoDeViaje}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Taxi travel time in New York in minutes</Typography>
              <Typography variant='body1' p={6}>As can be seen from the histogram, travel times often end up approaching the end of each minute. A concentration of trips that were approximated to an hour's duration can also be seen. While this implies a level of inaccuracy, it does not appear high enough to alter the analysis.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 1?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYNumeroDeViajesPorDiaDeLaSemana}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Number of trips per day of the week</Typography>
              <Typography variant='body1' p={6}>As can be seen in the graph, Wednesday is the day on which most trips occur. The large number of trips made on the weekend is striking. Saturday sees a large number of trips, while Sunday sees a decrease, making it the day with the fewest trips. However, it is difficult to determine whether Sunday is due to low demand for trips or whether drivers are simply taking it as a day off.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 2?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYNumeroDeViajesPorHoraDelDia}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Number of trips per hour of day</Typography>
              <Typography variant='body1' p={6}>As can be seen in the histogram, the majority of taxi trips are made in the afternoon, around 3 and 8 p.m. During the early morning, the frequency of trips decreases dramatically, probably due to lower passenger demand and vehicle supply.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 3?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxisNYNumeroDeViajesPorHoraDelDiaYCiertosDiasDeLaSemana}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Number of trips by time of day and certain days of the week</Typography>
              <Typography variant='body1' p={6}>When comparing the distribution of trips across three days with different characteristics, such as Monday, Friday, and Sunday, particularities emerge. Both Friday and Sunday show a higher proportion of trips in the late hours of the day, which is explained by Sunday being a day of rest, and Friday night being the start of weekend activities. Monday, being a workday, has a higher proportion of trips during dawn. A higher proportion of trips is observed in the early hours of Sunday than on other days, due to the weekend's nighttime activities.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 4?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYVelocidad}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Speed ​​of taxi trips</Typography>
              <Typography variant='body1' p={6}>As can be seen in the graph, the vast majority of trips are made at a speed of approximately 20 kilometers per hour. Otherwise, trips exceeding an average speed of 100 kilometers per hour will be excluded, as achieving such speeds within a city is considered unrealistic.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 5?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYTipoPago}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Payment method for taxi rides</Typography>
              <Typography variant='body1' p={6}>Data shows that a large number of trips are made by paying with a credit card.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 6?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={taxiNYPropina}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Tip amount per taxi ride</Typography>
              <Typography variant='body1' p={6}>Thirty percent of trips received no tips. It can be seen that the majority of tips received by taxi drivers are under $5. As you can see, the average tip is around $2, an amount significantly affected by the large number of untipped trips.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
