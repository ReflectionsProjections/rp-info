import { Box, Text, Image } from '@chakra-ui/react';
import { useState, useRef } from 'react';

export const vWallWidth = 640;
export const vWallHeight = 360;

function TextPane() {
    return (
        <Box>
            <Text as={'b'} fontSize={'xl'}>
                Title Here
            </Text>
            <Text fontSize={'sm'} mt={'20px'}>
                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.

                Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero.
            </Text>
        </Box>
    )
}


function VideoWall() {

    const videoRef = useRef < HTMLVideoElement > (null);
    const [phase, setPhase] = useState(0)

    return (
        <Box w={vWallWidth} h={vWallHeight} pos={'relative'} border={'1px solid'} mx={'auto'} zIndex={1} sx={{
            //backgroundColor: "gray.300",
            overflow: "hidden",
        }}>
            {/* left perspective box */}
            <Box w={vWallWidth} h={vWallHeight} border={'0px solid'} pointerEvents={'none'} pos={'absolute'}
                zIndex={8} sx={{ perspective: "800px", transform: "scale(0.7)" }}>
                {/* left wall */}
                <Box pos={'absolute'} w={vWallWidth * 1.3} h={vWallHeight} display={'flex'} justifyContent={'center'} alignItems={'center'}
                    sx={{
                        background: "linear-gradient(45deg,rgba(219, 212, 204, 1) 0%, rgba(255, 255, 255, 1) 89%, rgba(255, 255, 255, 1) 100%)",
                        border: "1px solid",
                        pointerEvents: "auto",
                        transition: "transform 0.4s linear",
                        transformOrigin: "left center",
                        transformStyle: "preserve-3d",
                        transform: `${phase === -1 ? "rotateY(0deg) translateX(-270px) translateZ(0px) scale(1.429)" // left wall -> center state
                            : phase === 1 ? "rotateY(90deg) translateZ(-650px) scaleY(1.77)" // right wall -> center state
                                : "rotateY(50deg) translateZ(-500px) scaleY(1.6)" // default state
                            }`,
                    }}
                    onClick={() => {
                        if (phase == 0) setPhase(-1);
                        else setPhase(0);
                    }}
                >
                    <Image src='wall_texture_2.jpg' pos={'absolute'} fit={'fill'} w={'100%'} h={'100%'} zIndex={-1} />
                    {/* video lolsies (for no ref forwarding) */}
                    <video width={0.8 * vWallWidth} height={0.8 * vWallHeight}
                        ref={videoRef} src={'video_wall_left.mp4.mov'}
                        loop muted playsInline
                        onMouseEnter={() => videoRef.current?.play()}
                        onMouseLeave={() => videoRef.current?.pause()}
                    />

                </Box>
            </Box>
            {/* right perspective box */}
            <Box w={vWallWidth} h={vWallHeight} border={'0px solid'} pointerEvents={'none'} pos={'absolute'}
                zIndex={7} sx={{ perspective: "1000px", transform: "scale(0.6)" }}>
                <Box pos={'absolute'} w={vWallWidth} h={vWallHeight} display={'flex'} justifyContent={'center'} alignItems={'center'}
                    padding={'15%'} sx={{
                        background: "radial-gradient(circle at 80%,rgba(255, 255, 255, 1) 30%, rgba(219, 212, 204, 1) 100%);",
                        border: "1px solid",
                        pointerEvents: "auto",
                        transition: "transform 0.4s linear",
                        transformOrigin: "center center",
                        transformStyle: "preserve-3d",
                        transform: `${phase === -1 ? "rotateY(-100deg) translateZ(-700px) scaleY(1.77) scaleX(1.1)" // left wall -> center state
                            : phase === 1 ? "rotateY(0deg) translateZ(0px) scale(1.667)" // right wall -> center state
                                : "rotateY(-40deg) translateZ(-600px) scaleY(1.4) scaleX(1.1)" // default state
                            }`,
                    }}
                    onClick={() => {
                        if (phase == 0) setPhase(1);
                        else setPhase(0);
                    }}
                >
                    {/* text pane :) */}
                    <TextPane />
                </Box>
            </Box>
            {/* background perspective box */}
            <Box w={vWallWidth} h={vWallHeight} pos={'absolute'} sx={{
                zIndex: -10,
                transform: "scale(1)",
                perspective: `${phase === -1 ? "500px" // left wall -> center state
                    : phase === 1 ? "500px" // right wall -> center state
                        : "500px" // default state
                    }`,
                transition: "perspective 0.2s linear",

            }}>
                <Image src='video_wall_background.png' pos={'absolute'} fit={'fill'} w={'100%'} h={'100%'} sx={{
                    transition: "transform 0.4s linear",
                    transform: `${phase === -1 ? "rotateY(-40deg) translateZ(-300px) scale(2)" // left wall -> center state
                        : phase === 1 ? "rotateY(30deg) translateZ(-300px) scale(2)" // right wall -> center state
                            : "rotateY(0deg) translateZ(-500px) scale(2)" // default state
                        }`,
                }} />
            </Box>
        </Box>
    )
}

export default VideoWall;