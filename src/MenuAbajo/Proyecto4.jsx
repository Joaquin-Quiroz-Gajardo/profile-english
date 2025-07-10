import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import taxi from '../Imagenes/taxi.png'
import Proyecto4Tabs from './Proyecto4Tabs'

const Proyecto4 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Predicting Taxi Tips in New York</Typography>
      <Container>
        <Chip color='success' label="Data analysis" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Matplotlib" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Scikit-learn" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={taxi}></img>
      </Container>
      <Typography variant='body1' p={2}>Analysis of tips for taxi rides in New York, identifying factors that facilitate obtaining higher tips.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Graphics and analysis of variables</Typography>
      <Proyecto4Tabs></Proyecto4Tabs>


      <Typography variant='h4' component={"h2"} p={2}>Research conclusions</Typography>
      <Typography variant='body1' p={2}>Finally, 13 predictor variables and one dichotomous variable remain to be predicted. Seven of the predictor variables are categorical, and the rest are numerical.</Typography>
    </>
  )
}

export default Proyecto4