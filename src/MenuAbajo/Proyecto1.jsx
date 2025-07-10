import React from 'react'
import Proyecto1Slider from './Proyecto1Slider'
import Proyecto1Plot from './Proyecto1Plot'
import { Box, Chip, Container, Typography } from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import baseDeDatos from "../Imagenes/mysql-squeme.png"
import activeLearning from "../Imagenes/active learning process.png"
import Proyecto1ActiveLearning from './Proyecto1ActiveLearning';
import videoAppReact from '../Imagenes/aplicacionReactActiveLearning.gif'


const Proyecto1 = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Assisted text classification</Typography>
      <Container>
        <Chip color='success' label="Machine learning" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Natural language processing" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="MySQL" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="React" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Python" sx={{margin:"5px"}}></Chip>
        <Chip color='success' label="Tensor flow" sx={{margin:"5px"}}></Chip>
      </Container>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={videoAppReact}></img>
      </Container>
      <Typography variant='body1' p={2}>Creation of an application that assists in the classification of text data. The program actively searches for the most informative unclassified instances for the model.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Objective</Typography>
      <Typography variant='body1' p={2}>Assisting the human data classification process. Assisting database classification to avoid the problem of unbalanced databases (inequality in the database causes problems when training classification models).</Typography>

      <Typography variant='h4' component={"h2"} p={2}>methodology</Typography>
      <Typography variant='body1' p={2}>Implementation of strategies to improve the data selected for classification (active learning) and methodologies for artificial case generation (guided learning), implemented with various text classifier models (BERT, LLAMA, and LSTM).
</Typography>

      <Typography variant='h4' component={"h2"} p={2}>Results table</Typography>
      <Typography variant='body1' p={2}>The graph on the left shows the results of implementing active learning strategies. While the graph on the right shows the table with the data from each database, this table allows you to change the data presented in the graph on the left, while the graph on the left also allows you to change the metric by which the strategy's performance is presented.</Typography>
      <Proyecto1Plot></Proyecto1Plot>

      <Typography variant='h4' component={"h2"} p={2}>Explanation of the strategies</Typography>
      <Typography variant='body1' p={2}>Active learning is a technique that allows a model to actively select which data is most informative for humans to label. Instead of training a model with a fully labeled dataset from the start, the model learns to identify more difficult or uncertain examples in its predictions, minimizing the effort required.</Typography>
      <Typography variant='body1' p={2}>Guided learning, on the other hand, is a crucial strategy, especially when dealing with less common or rare categories within a dataset. In this approach, text inputs are artificially generated, specific to categories that are less representative in the dataset. This approach, while increasing training costs, is the only alternative when minority categories are impossible to access, which underscores its importance.</Typography>
      <Proyecto1Slider></Proyecto1Slider>      

      <Typography variant='h4' component={"h2"} p={2}>Project database</Typography>
      <Typography variant='body1' p={2}>MySQL was used to store project data (models, metrics, unsorted databases).</Typography>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={baseDeDatos}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>Chart shows the database schema.</Typography>

      <Typography variant='h4' component={"h2"} p={2}>The active learning process</Typography>
      <Typography variant='body1' p={2}>There are 6 steps to implementing active learning in data labeling.</Typography>
      <Proyecto1ActiveLearning></Proyecto1ActiveLearning>
      <Container maxWidth={'sm'} sx={{padding:"2px"}}>
        <img style={{width:"100%", height:"100%"}} src={activeLearning}></img>
      </Container>
      <Typography variant='body2' textAlign={'center'}>Chart shows the active learning process.</Typography>
      <Box></Box>
    </>
  )
}

export default Proyecto1