import React from 'react'
import { vidProps } from '../types'
import {Box, Typography, CardContent, CardMedia} from '@mui/material'
import {colors} from '../utils/constants'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelTitle, demoChannelUrl, demoProfilePicture } from '../utils/constants'
interface ChannelCardProps {
  channelDetail: vidProps;
  marginTop?: string;
}

const ChannelCard: React.FC<ChannelCardProps> = ({channelDetail, marginTop}) => {
  const {snippet, id : {channelId}} = channelDetail;
  const {title, thumbnails: {medium: {url}}} = snippet;

  return (
    <Box sx={{
      width: {xs: "356px", md:"320px"}, height: 326,
      borderRadius: 20, boxShadow: 'none',
      display: 'flex', justifyContent: 'center',
      textAlign: 'center', alignItems:"center",
      marginTop, mx: 'auto',
      }}>
      <Link to={url? `/channel/${channelId}`: demoChannelUrl} style={{textDecoration: 'none', color: '#fff'}}>
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems:"center", color: '#fff' }}>
          <CardMedia
            component="img"
            image={url? url: demoProfilePicture}
            alt={title? title: demoChannelTitle}
            sx={{borderRadius: '50%', width: 180, height: 180, mb: 2, border: `2px solid ${colors.secondary}`}}
          />
          <Typography variant="h6" fontWeight="bold">
            {title? title: demoChannelTitle}
            <CheckCircle sx={{fontSize: '12px', color: "gray", ml: '5px'}} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && 
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}         subscribers
            </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard