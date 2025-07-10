import { Box, Icon, VStack, Image, Flex, Container } from "@chakra-ui/react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { createPortal } from "react-dom";
import AnimatedPillar from "./AnimatedPillar";


interface AnimatedPillarsSectionProps {
    icons: string[];
}

const MotionBox = motion(Box);
const MotionContainer = motion(Container);
const spotlightHeight = "975px";

export const AnimatedPillarsSection: React.FC<AnimatedPillarsSectionProps> = ({ icons }) => {
    const { scrollY } = useScroll();
    const offset = 1000;
    const shadowOpacity = useTransform(scrollY, [-300 + offset, 0 + offset, 350 + offset, 650 + offset], [0, 0.2, 0.2, 0]);
    const heightDiff = useTransform(scrollY, [-250 + offset, 700 + offset], [200, -750]);

    return (
        <Box pos="relative" zIndex={100} display={{ base: "none", md: "block" }}>
            {/* portal */}
            {createPortal(
                <Box pos="fixed" w="100vw" h="100vh" zIndex={50} top="0px" data-label="pillars-overlay" pointerEvents="none">
                    <MotionBox
                        style={{
                            opacity: shadowOpacity
                        }}
                        bg="black" w="100%" h="100%"
                    >
                        <MotionContainer
                            maxW="container.xl"
                            position="absolute"
                            zIndex={3}
                            left="0" right="0"
                            mx="auto"
                            style={{
                                top: heightDiff
                            }}
                            sx={{
                                maskImage: "linear-gradient(transparent 0%, black 20%, black 80%, transparent 100%)"
                            }}
                        >
                            <Flex                                                   // pillars
                                direction="row"
                                justify="space-between"
                                height="100%"
                                width="100%"
                            >
                                <VStack spacing={1} width="20%" filter="blur(10px)">
                                    <MotionBox w="200px" h={spotlightHeight} bg="rgba(250, 230, 170, 1)" left="0" pos="relative" zIndex={1}
                                        clipPath="polygon(25% 0, 75% 0, 95% 100%, 5% 100%)" />
                                </VStack>
                                <VStack spacing={1} width="20%" filter="blur(10px)">
                                    <MotionBox w="200px" h={spotlightHeight} bg="rgba(250, 230, 170, 1)" filter="blur(5px)" left="0" opacity="1" pos="relative" zIndex={1}
                                        clipPath="polygon(25% 0, 75% 0, 95% 100%, 5% 100%)" />
                                </VStack>
                                <VStack spacing={1} width="20%" filter="blur(10px)">
                                    <MotionBox w="200px" h={spotlightHeight} bg="rgba(250, 230, 170, 1)" filter="blur(5px)" opacity="1" pos="relative" zIndex={1}
                                        clipPath="polygon(25% 0, 75% 0, 95% 100%, 5% 100%)" />
                                </VStack>
                                <VStack spacing={1} width="20%" filter="blur(10px)">
                                    <MotionBox w="200px" h={spotlightHeight} bg="rgba(250, 230, 170, 1)" filter="blur(5px)" opacity="1" pos="relative" zIndex={1}
                                        clipPath="polygon(25% 0, 75% 0, 95% 100%, 5% 100%)" />
                                </VStack>
                                <VStack spacing={1} width="20%" filter="blur(10px)">
                                    <MotionBox w="200px" h={spotlightHeight} bg="rgba(250, 230, 170, 1)" filter="blur(5px)" opacity="1" pos="relative" zIndex={1}
                                        clipPath="polygon(25% 0, 75% 0, 95% 100%, 5% 100%)" />
                                </VStack>

                            </Flex>
                        </MotionContainer>
                    </MotionBox>

                </Box>, document.body)} {/* portal */}
            <Flex                                                   // pillars
                direction="row"
                justify="space-between"
                top="-15px"
                display={{ base: "none", md: "flex" }}
                pos="relative" zIndex={3}
                paddingTop="100px"
                height="500px"
                sx={{
                    maskImage: "linear-gradient(black 30%, transparent 100%)"
                }}
            >
                <VStack spacing={1} width="20%">
                    <AnimatedPillar baseHeight={-55} heightDelta={300} time={2}>
                        <Image src={icons[0]} w="75px" h="75px" filter="drop-shadow(5px 20px 10px gray)" />
                    </AnimatedPillar>
                </VStack>
                <VStack spacing={1} width="20%">
                    <AnimatedPillar baseHeight={25} heightDelta={300} time={2} >
                        <Image src={icons[1]} w="75px" h="75px" filter="drop-shadow(5px 20px 10px gray)" />
                    </AnimatedPillar>
                </VStack>
                <VStack spacing={1} width="20%">
                    <AnimatedPillar baseHeight={-5} heightDelta={300} time={2} >
                        <Image src={icons[2]} w="75px" h="75px" filter="drop-shadow(5px 20px 10px gray)" />
                    </AnimatedPillar>
                </VStack>
                <VStack spacing={1} width="20%">
                    <AnimatedPillar baseHeight={45} heightDelta={300} time={2} >
                        <Image src={icons[3]} w="75px" h="75px" filter="drop-shadow(5px 20px 10px gray)" />
                    </AnimatedPillar>
                </VStack>
                <VStack spacing={1} width="20%">
                    <AnimatedPillar baseHeight={-35} heightDelta={300} time={2} >
                        <Image src={icons[4]} w="75px" h="75px" filter="drop-shadow(5px 20px 10px gray)" />
                    </AnimatedPillar>
                </VStack>
            </Flex>
        </Box>
    );

}