// src/routes/Home.tsx
import { Header } from '../pages/Home/Header'
import VideoWall from '../pages/Home/VideoWall'

export const Home = () => {
  return (
    <>
      <Header />
      {/* <VideoHeader /> */}
      <VideoWall />
    </>
  )
}