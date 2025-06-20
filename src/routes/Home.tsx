// src/routes/Home.tsx
import { Box } from '@chakra-ui/react'
import { Header } from '../pages/Home/Header'
import VideoWall from '../pages/Home/VideoWall'
import VideoWallOld from '../pages/Home/VideoWallOld'

export const Home = () => {
  return (
    <>
      <Header />
      {/* <VideoHeader /> */}
      <Box mx={'auto'} mt={'20px'} mb={'400px'}>
        <VideoWall />
      </Box>
      <VideoWallOld />
    </>
  )
}