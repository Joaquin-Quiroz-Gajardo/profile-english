import { Chip, Container, Typography } from '@mui/material'
import React from 'react'
import relaves from '../Imagenes/Relaves.png'
import Proyecto2Tabs from './Proyecto2Tabs'

const Proyecto2 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Academic data classifier and web scraping</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Excel" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="BERT" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Tensor flow" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Web scraping" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={relaves}></img>
      </Container>
      <Typography variant='body1' p={2}>Data extraction, academic papers dealing with the topic of mining tailings. A text classifier was also developed to classify the articles into two categories (retrospective, prospective).</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Data extraction and classifier</Typography>
      <Typography variant='body1' p={2}>Academic articles were collected from the Scopus database, considered the largest in the world. A search was conducted for articles containing the words "handling," "handling dewatering," and "mine tailings" from 2010 to 2020. As a result of this process, 15,153 publication records were downloaded and submitted for review. With an initial group of 50 randomly selected articles, it was recognized that a database cleanup was necessary because the word "tail" sometimes included articles related to other fields of study, such as statistical and mathematical discussions. Indeed, a condition for incorporating articles into the database was that they contain the words "mine," "minera," or "ore," as well as "dam," "dike," "dyke," "shadow," or "tail" referring to tailing. As a result, cases that did not have any of the aforementioned tokens were excluded, leaving the database with 8,434 articles.</Typography>
      <Typography variant='body1' p={2} pt={1}>The Beautiful Soap library was used for data extraction, allowing us to gather additional information from the articles (area of ​​study). The BERT model was also used to classify articles into prospective and retrospective categories. With a sample of 187 articles, an F1 score of 0.927 and an accuracy of 0.93 were achieved.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Analysis of results</Typography>
      <Proyecto2Tabs></Proyecto2Tabs>
    </>
  )
}

export default Proyecto2