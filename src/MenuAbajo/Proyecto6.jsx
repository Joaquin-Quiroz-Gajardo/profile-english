import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import XEjemplo from '../Imagenes/XEjemplo.png'
import XEntregaDerechosPorRegion from '../Imagenes/XEntregaDerechosPorRegion.png'
import Proyecto6Limpieza from './Proyecto6Limpieza'
import XResultadoEntrenamiento from '../Imagenes/XResultadoEntrenamiento.png'

const Proyecto6 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Named entity recognition</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Pytorch" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEjemplo}></img>
      </Container>
      <Typography variant='body1' p={2}>The named entities were identified and classified within a sample of tweets addressing the topic of drought in Chile. This was done through a process known as Aspect Extraction. This makes it possible to identify the support, neutrality, or rejection expressed in an opinion.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Data on the delivery of water rights</Typography>
      <Typography variant='body1' p={2}>The increased regulation incorporated by the 2005 reform of the water code promised to reduce demand and speculative ownership of water rights through the establishment of rights auctions and commissions to penalize idle water maintenance. However, the increasing drought in Chile had the opposite effect. Rights allocations increased, with no change from the previous trend (Herrera et al. 2019).</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XEntregaDerechosPorRegion}></img>
      </Container>

      <Typography variant='h4' component={"h2"} p={2}>Data extraction and preprocessing</Typography>
      <Typography variant='body1' p={2}>The data was collected through the Twitter API, using drought as the search query. The data was then processed as follows.</Typography>
      <Proyecto6Limpieza></Proyecto6Limpieza>

      <Typography variant='h4' component={"h2"} p={2}>Results Named entity recognition with BETO</Typography>
      <Typography variant='body1' p={2}>The model generally performed well on the aspect detection task, with most categories achieving an F1 score above 0.9. However, the categories that did not achieve sufficient presence in the database were negatively highlighted, with performances that were not considered reliable.</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={XResultadoEntrenamiento}></img>
      </Container>
    </>
      
    
  )
}

export default Proyecto6