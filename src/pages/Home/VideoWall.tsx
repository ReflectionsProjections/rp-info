import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useRef } from 'react';
export const VideoHeader = () => (
    <Box py={10}><Heading>Video Wall Section</Heading></Box>
)

function VideoWall() {
    // state here
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <Box w={640} h={360} border={'2px'} mx={'auto'} zIndex={5} sx={{
            backgroundColor: "gray.300",
            perspective: "150px",
            overflow: "hidden",
        }}>

            <Box pos={'absolute'} w={636} h={356} border={'1px'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                transition={'all 0.5s'}
                sx={{
                    zIndex: -1,
                    transform: "rotateZ(0deg) rotateY(15deg) scale(0.375, 0.775) translate(-18%, -2.5%)",
                    transformOrigin: "20% center",
                    backgroundColor: "white",
                    transformStyle: "preserve-3d",
                }}
                _hover={{
                    zIndex: 2,
                    transform: "rotateY(0deg) scale(1)",
                }} >

                <video ref={videoRef} src='video_wall_left.mp4.mov' width={500} height={300}
                    loop muted playsInline
                    onMouseEnter={() => videoRef.current?.play()}
                    onMouseLeave={() => {
                        videoRef.current?.pause();
                    }}
                />
            </Box>
            <Box pos={'absolute'} w={636} h={356} border={'1px'} display={'flex'} alignItems={'center'} px={'10%'}
                transition={'all 0.5s'}
                sx={{
                    zIndex: -2,
                    transform: "rotateZ(-0deg) rotateY(-13deg) scale(0.45, 0.7) translate(5%, 0%)",
                    transformOrigin: "right center",
                    backgroundColor: "white",
                    transformStyle: "preserve-3d",
                }}
                _hover={{
                    zIndex: 2,
                    transform: "rotateY(0deg) scale(1)",
                }} >

                <VStack>
                    <Text as={'b'} fontSize={'xl'}>
                        Lorem ipsum dolor sit amet
                    </Text>
                    <br />
                    <Text fontSize={'md'}>
                        Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.

                        Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.
                    </Text>
                </VStack>
            </Box>
            <Image src='video_wall_background.png' pos={'absolute'} zIndex={-5} fit={'fill'} w={'100%'} h={'100%'} />
        </Box >
    )
}

export default VideoWall;