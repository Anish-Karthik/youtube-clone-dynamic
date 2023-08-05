import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Box, Stack, Typography} from '@mui/material'
import { CheckCircle, Title } from '@mui/icons-material'
import {colors} from '../utils/constants'
import ReactPlayer from 'react-player'
import { vidProps } from '../types'
import { Videos} from './'
import { fetchFromApi } from '../utils/fetchFromApi'

// interface VideoDetailProps {
//   videoDetail?: vidProps[] | null;
//   setVideoDetail: React.Dispatch<React.SetStateAction<vidProps[]>>;
// }


export default function VideoDetail() {
  const {id} = useParams<{id: string}>();
  const [videoDetail, setVideoDetail] = useState<vidProps>({} as vidProps);  
  const [relatedVideos, setRelatedVideos] = useState<vidProps[]>([]);
  
  useEffect(() => {
    fetchFromApi(`/videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        console.log(data)
        setVideoDetail(data.items[0])
      }
    );
    fetchFromApi(`/search?part=snippet&relatedToVideoId=${id}&maxResults=10&type=video`)
      .then((data) => {
        console.log(data)
        setRelatedVideos(data.items)
      }
    );
  }, [id])
  return (
    <Box sx={{minHeight: '95vh', backgroundColor: colors.secondary}} flexDirection={"column"}>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box sx={{flex: 1, height: '100vh'}}>
          <Box sx={{ position: "sticky", top: "86px", height: "70vh" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
            classsName="react-player" width="100%" height="100%" controls={true} />
            <Typography variant="h5" fontWeight="bold" sx={{color: '#fff', px: 2}}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack 
              direction="row" justifyContent={"space-between"}
              sx={{px: 1, py: 2, color: '#fff'}}
            >
              
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Typography variant={"h6"}  fontWeight="bold">
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircle sx={{ fontSize: '12px'}} />
                  </Typography>
              </Link>
              <Stack direction="row" spacing={1}>
                <Typography variant={"body1"} fontWeight="bold" sx={{opacity: 0.7}}>
                  {parseInt(videoDetail.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant={"body1"} fontWeight="bold" sx={{opacity: 0.7}}>
                  {parseInt(videoDetail.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent={"center"} alignItems={"center"}>
          <Videos videos={relatedVideos} direction={"column"} />
        </Box>
      </Stack>
    </Box>
  )
}
