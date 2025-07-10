import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Container, Grid, Paper, Typography } from '@mui/material';
import presenciaRegiones from '../Imagenes/googleNewsPresenciaPorRegion.png'
import presenciaMedioComunicacion from '../Imagenes/googleNewsPrecenciaMedioComunicacion.png'
import presenciaPorAno from '../Imagenes/googleNewsPrecenciaPorAno.png'

export default function Proyecto3Tabs() {
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
          <Tab label="Part one" />
          <Tab label="Part two" />
          <Tab label="Part three" />
        </Tabs>
      </Box>

      {value == 0?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaRegiones}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Frequency of news by region</Typography>
              <Typography variant='body1' p={6}>Here you can see the frequency of each region in the database, with different colors depending on the region (green for the north, red for the central, and blue for the south). As you can see, the central region receives the most news, with the Valparaíso region featuring the most articles.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 1?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaMedioComunicacion}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>Most frequent media</Typography>
              <Typography variant='body1' p={6}>As can be seen in the graph, there is a greater presence of digital media with news, being “resumen.com” and “El Ciudadano” the most frequent, coming later a traditional medium such as “La Tercera”.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
      {value == 2?<>
        <Grid Container spacing={2} mt={4} mb={4} sx={{display:"flex"}}>
          <Grid size={6}>
            <Container maxWidth={'sm'} sx={{padding:"2px"}}>
              <img style={{width:"100%", height:"100%"}} src={presenciaPorAno}></img>
            </Container>
          </Grid>
          <Grid size={6}>
            <Paper sx={{minHeight:"400px", margin:"32px"}}>
              <Typography variant='h5' component={"h3"} p={6} pb={0}>News dates</Typography>
              <Typography variant='body1' p={6}>This graph shows the exponential increase in news stories dealing with environmental conflicts, a fact that can be explained by the growing tension surrounding this topic, along with the increased reach and use of digital media.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </>:<></>}
    </>
  );
}
