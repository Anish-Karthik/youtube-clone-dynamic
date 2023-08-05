import {useEffect, useState} from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './'
import {colors} from '../utils/constants'
import {fetchFromApi} from '../utils/fetchFromApi'
import { useParams } from 'react-router-dom'

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams<{searchTerm: string}>()

  useEffect(() => {
    fetchFromApi(`/search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items)
        // console.log(data)
      })
  }, [searchTerm])


  return (
    <Box sx={{ overflowY: "auto",height: '90vh',flex: 2 }}>
      <Typography variant="h4" 
        fontWeight={"bold"}
        sx={{color: '#fff'}}
      >
        search results for: <span style={{color: colors.primary}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}
