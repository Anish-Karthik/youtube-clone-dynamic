import React from 'react'
import {Box, Stack} from '@mui/material'
import {VideoCard, ChannelCard} from './'
import { vidProps } from '../types'

interface VideosProps {
  videos: vidProps[];
}

const Videos: React.FC<VideosProps> = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction={{sx: 'column', md: 'row'}} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video: vidProps, idx: number) => (
        <Box key={idx}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos