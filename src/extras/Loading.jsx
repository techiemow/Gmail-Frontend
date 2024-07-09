import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box>
        <CircularProgress/>
        <Typography>Loading...</Typography>
       </Box>
  )
}

export default Loading;