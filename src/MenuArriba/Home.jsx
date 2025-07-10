import { Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <>
      <Typography variant='h2' component="h1" p={2}>Joaquín Quiroz Portfolio</Typography>
      <Typography variant='body1' p={2}>Artificial Intelligence Specialist (FIUBA). Experience in data analysis, web scraping, SQL databases, machine learning, text classifier models, and React.</Typography>

      <Typography variant='h4' component="h2" p={2}>Contact and CV</Typography>
      <Typography variant='body1' p={2}>Phone: +56986578761</Typography>
      <Typography variant='body1' p={2}>Email: joaquin.quiroz.gajardo@gmail.com</Typography>
      <Typography variant='body1' p={2}>CV: <a href='https://docs.google.com/document/d/1z78KT0A_oGos6dDZBQNan7VZbG-m2GuP-cqo4LqfpkI/edit?usp=drive_link' target='_blank'>Link</a></Typography>
    </>
  )
}

export default Home