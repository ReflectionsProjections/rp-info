import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react';
export const VideoHeader = () => (
    <Box py={10}><Heading>Video Wall Section</Heading></Box>
)

function VideoWall() {
    // state here
    const videoRef = useRef<HTMLVideoElement>(null);
    const [angle, setAngle] = useState(0);
    return (
        <>
            <Box w={640} h={360} border={'2px'} pos={'relative'} mx={'auto'} zIndex={1} mb={'20px'} sx={{ backgroundColor: "gray.300", overflow: "hidden", margin: "auto", pointerEvents: "none" }}>
                <Box w={'100%'} h={'100%'} pos={'absolute'} sx={{ transform: "scaleY(1.1) scaleX(0.7)", perspective: "800px", zIndex: 3, pointerEvents: "none" }}>
                    <Box pos={'absolute'} w={636} h={356} border={'1px'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                        transition={'all 0.5s'}
                        sx={{
                            zIndex: 4,
                            transform: `rotateY(${44}deg) translateZ(-500px)`,
                            transformOrigin: "center center",
                            backgroundColor: "white",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.2s linear",
                            pointerEvents: "auto"
                        }}
                        _hover={{
                            zIndex: 10,
                            transform: `rotateY(0) translateZ(0) scaleX(1.43)`,
                            //transform: "rotateY(0deg) scale(1)",
                        }}>
                        {/* onMouseEnter={() => setAngle(-40)}
                        onMouseLeave={() => setAngle(0)}> */}

                        <video ref={videoRef} src='video_wall_left.mp4.mov' width={500} height={300}
                            loop muted playsInline
                            onMouseEnter={() => videoRef.current?.play()}
                            onMouseLeave={() => {
                                videoRef.current?.pause();
                            }}
                        />

                    </Box>
                </Box>
                <Box w={'100%'} h={'100%'} pos={'absolute'} sx={{ transform: "scaleY(1.2) scaleX(0.9)", perspective: "500px", zIndex: 2, pointerEvents: "none" }}>
                    <Box pos={'absolute'} w={636} h={356} top={-0} border={'1px'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                        transition={'all 0.5s'} px={20}
                        sx={{
                            zIndex: 3,
                            transform: `rotateY(${angle - 36}deg) translateZ(-600px)`,
                            transformOrigin: "center center",
                            backgroundColor: "white",
                            transformStyle: "preserve-3d",
                            transition: "transform 0.2s linear",
                            pointerEvents: "auto"
                        }}
                        _hover={{
                            zIndex: 10,
                            transform: `rotateY(0) translateZ(0) scaleX(1.11)`, // disables rotate and translate
                            //transform: "rotateY(0deg) scale(1)",
                        }}
                        onMouseEnter={() => setAngle(40)}
                        onMouseLeave={() => setAngle(0)}>

                        <Box display={'block'}>
                            <Text as={'b'} fontSize={'xl'}>
                                Lorem ipsum dolor sit amet
                            </Text>
                            <br />
                            <Text fontSize={'md'} mt={'20px'}>
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.

                                Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero.
                            </Text>
                        </Box>

                    </Box>
                </Box>
                <Box w={'100%'} h={'100%'} pos={'absolute'} sx={{ transform: "scale(1)", perspective: "500px", zIndex: -10 }}>
                    <Image src='video_wall_background.png' pos={'absolute'} fit={'fill'} w={'100%'} h={'100%'} sx={{
                        transform: `rotateY(${angle / 2}deg) scale(2) translateZ(-500px)`,
                        transition: "transform 0.2s linear",
                    }} />
                </Box>
            </Box >
            <Button onClick={() => setAngle(-40)}>-40</Button>
            <Button onClick={() => setAngle(0)}>0</Button>
            <Button onClick={() => setAngle(40)}>+40</Button>
        </>
    )

}

export default VideoWall;