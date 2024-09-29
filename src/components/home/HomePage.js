import { Container , Grid, Typography } from '@mui/material'
import React from 'react'
import Blogs from '../blog/Blogs'

function HomePage() {
  return (
    <Container maxWidth="lg">
        <Grid container padding={3}>
        <Typography component="h3" variant="h5" mb={3} fontWeight={700}>خدمات کلینیک</Typography>
        <Grid item md={12} xs={12} mt={4}>
            
            <Blogs/>
        </Grid>
        </Grid>
    </Container>
  )
}

export default HomePage