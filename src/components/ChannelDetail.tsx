import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos, ChannelCard} from './'
import { fetchFromApi } from '../utils/fetchFromApi';

export default function ChannelDetail() {
  const {id} = useParams<{id: string}>();
  console.log(id);
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`/channels?part=snippet&id=${id}`)
    .then((data) => {
      console.log('channel',data)
      setChannelDetail(data?.items[0])
    })

    fetchFromApi(`/search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {
      console.log('videos',data)
      setVideos(data?.items)
    })
  }, [id])


  return (
    <Box minHeight={'95vh'} width={"100%"}>
      <Box>
        <div style={{
          background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 50%, rgba(0,212,255,1) 100%)",
          height: '300px',
          zIndex: 10
        }} />
        {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop='-110px' />}
      </Box>
      <Box display="flex" p="2" width={"100%"} sx={{
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingLeft: '7vw',
      }}>
        <Box >
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  )
}
