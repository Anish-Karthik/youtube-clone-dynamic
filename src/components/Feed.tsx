import {useEffect, useState} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {Videos, Sidebar} from './'
import {colors} from '../utils/constants'
import { fetchFromApi } from '../utils/fetchFromApi'

export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`/search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setVideos(data.items)
        // console.log(data)
      })
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
      <Box
        sx={{ 
          height: {sx: 'auto', md: '92vh'}, 
          borderRight: `1px solid ${colors.secondary}`,
          px: {sx: 0, md: 2},
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography variant="body2" sx={{color: '#fff'}}>
          Copyright 2023 Anish
        </Typography>
      </Box>
      <Box sx={{ overflowY: "auto",height: '90vh',flex: 2 }}>
        <Typography variant="h4" 
          fontWeight={"bold"}
          sx={{color: '#fff'}}
        >
          {selectedCategory} <span style={{color: colors.primary}}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
