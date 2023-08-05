import React from 'react'
import { vidProps } from '../types'
import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import {colors} from '../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'

interface VideoCardProps {
  video: vidProps;
}

const VideoCard: React.FC<VideoCardProps>  = ({video}) => {
  const {snippet, id : {videoId}} = video;
  const {title, channelId, channelTitle, thumbnails: {medium: {url}}} = snippet;

  return (
    <Card 
      sx={{
        width: {xs:"100%", md:"320px"},
        borderRadius: 0, boxShadow: 'none', 
      }}
    >
      <Link to={videoId? `/video/${videoId}`:
      demoVideoUrl} style={{textDecoration: 'none', color: '#fff'}}>
        <CardMedia
          component="img"
          image={url}
          alt={title}
          sx={{height: 180, width: 358}}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: colors.secondary, color: colors.tertiary, height: '106px' }}
      >
        <Link to={videoId? `/video/${videoId}`:
        demoVideoUrl} style={{textDecoration: 'none', color: '#fff'}}>
          <Typography variant="subtitle1"  fontWeight="bold" noWrap>
            {title? title.slice(0, 60): demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={channelId? `/channel/${channelTitle}`:
        demoChannelUrl} style={{textDecoration: 'none', color: '#fff'}}>
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"} noWrap>
            {channelTitle? channelTitle: demoChannelTitle}
            <CheckCircle sx={{fontSize: '12px', color: "gray", ml: '5px'}} />
          </Typography>
          
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard