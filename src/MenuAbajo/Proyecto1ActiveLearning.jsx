import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Proyecto1ActiveLearning = () => {
  const paso1 = "The graph shows the first step is random classification, which involves randomly selecting cases from the database to be classified. Since there is no trained model, there is no methodology to optimize data selection at this stage."
  const paso2 = "The second step involves training the model. Typically, when performing the first step, the data portion obtained is smaller than what will ultimately be available, so poor data classification performance is common during this stage."
  const paso3 = "The third step is the query strategy. This strategy selects the most informative instances within the unsorted database. This step should be isolated from the previous steps, as it allows the query strategy to be modified while leaving the rest of the API code intact. It's also important to remember that query strategy dependency exists, a problem in which the success of the active learning process depends heavily on the selected query strategy. Therefore, it's important to be able to easily modify this strategy."
  const paso4 = "The fourth step is the classification of the data selected in the previous stage. This stage presents two specific challenges. First, oracle dependency, which implies the possibility of errors in the classification, as human intervention is required at this stage. Second, there is labeling effort, which is the effort required to train the person who performs this classification. These challenges require precision in the choice of query strategy to avoid the human effort required for this stage. The oracle classification results are stored in the database."
  const paso5 = "The fifth step consists of training the network, incorporating the data obtained in the previous stage."
  const paso6 = "Finally, the sixth stage consists of a loop between stages three and five. Therefore, this active learning process is an iterative process, continuing until the data needed to train the network is obtained."
  const [texto, setTexto] = React.useState(paso1)
  return (
    <Grid container spacing={2} mt={4} mb={4}>
      <Grid size={6}>
        <Button color={paso1==texto?"primary":"#222"} onClick={()=> setTexto(paso1)} sx={{display:"block", padding:"20px"}}>1. Random data classification</Button>
        <Button color={paso2==texto?"primary":"#222"} onClick={()=> setTexto(paso2)} sx={{display:"block", padding:"20px"}}>2. Model training</Button>
        <Button color={paso3==texto?"primary":"#222"} onClick={()=> setTexto(paso3)} sx={{display:"block", padding:"20px"}}>3. Query strategy implementation</Button>
        <Button color={paso4==texto?"primary":"#222"} onClick={()=> setTexto(paso4)} sx={{display:"block", padding:"20px"}}>4. Classification of selected data</Button>
        <Button color={paso5==texto?"primary":"#222"} onClick={()=> setTexto(paso5)} sx={{display:"block", padding:"20px"}}>5. Model training</Button>
        <Button color={paso6==texto?"primary":"#222"} onClick={()=> setTexto(paso6)} sx={{display:"block", padding:"20px"}}>6. Repeat steps, from 3 to 5</Button>
      </Grid>
      <Grid size={6}>
        <Paper sx={{height:"400px"}}>
          <Typography variant='body1' p={6}>{texto}</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Proyecto1ActiveLearning