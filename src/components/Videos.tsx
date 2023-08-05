import React from 'react'
import {Box, Stack} from '@mui/material'
import {VideoCard, ChannelCard} from './'
import { vidProps } from '../types'

interface VideosProps {
  videos: vidProps[];
  direction?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
}

const Videos: React.FC<VideosProps> = ({videos, direction}) => {
  console.log(videos)
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
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