import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import googleNews from '../Imagenes/googleNews.png'
import Proyecto3Tabs from './proyecto3Tabs'
import extraccionDeDatos from '../Imagenes/googleNewsExtraccionDatos.png'
import colocacionFecha from '../Imagenes/googleNewsColocacionFecha.png'
import procesoIterativo from '../Imagenes/googleNewsIteracion.png'

const Proyecto3 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Web scraping, google news data
</Typography>
      <Container>
        {/* <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip> */}
        <Chip color='success' label="Web scraping" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Virtual machine" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Beautiful Soup" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={googleNews}></img>
      </Container>
      <Typography variant='body1' p={2}>Extraction of data from Chile regarding environmental conflicts, separated by commune.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Data extraction</Typography>
      <Typography variant='body1' p={2}>The first step was a search for each commune in each region, which was conducted with a request detailing the commune and the research topic. Once the response was received, the data was extracted from the website. To extract more data at this stage, the IP address was changed using Colab. Finally, a dataframe was generated with the extracted information, which was then added to the CSV file containing all the data.</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={extraccionDeDatos}></img>
      </Container>
      <Typography variant='body1' p={2}>This was an iterative process, as it was necessary to go through all the pages with news. Google News separated them into groups of 10. A maximum of 100 news items were extracted from each commune. If a page with fewer than 10 news items was detected, the search for that commune was terminated.</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={procesoIterativo}></img>
      </Container>
      <Typography variant='body1' p={2}>To obtain the date of the news, we had to search using the htmlDate library. In cases where the date wasn't found, we used the HTML date, which only includes the news story's age, and imputed that value.</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={colocacionFecha}></img>
      </Container>      

      <Typography variant='h4' component={"h2"} p={2}>Analysis of collected data</Typography>
      <Proyecto3Tabs></Proyecto3Tabs>
    </>
  )
}

export default Proyecto3