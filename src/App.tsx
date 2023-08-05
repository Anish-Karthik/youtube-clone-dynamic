import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Navbar ,Feed, VideoDetail, ChannelDetail, SearchFeed} from './components'

// , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' 
function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: '#000', color: '#fff'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
