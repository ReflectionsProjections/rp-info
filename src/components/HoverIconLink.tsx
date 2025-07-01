import { Box, Image, Link } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

interface HoverIconLinkProps {
    link: string;
    src: string;
    title?: string;
}

export const HoverIconLink: React.FC<HoverIconLinkProps> = ({ link, src, title }) => {
    const [isHovered, setIsHovered] = useState(false);
    const animation = useAnimation();

    useEffect(() => {
        console.log("animate START")
        if (isHovered) {
            animation.start({
                scale: 1.3,
                opacity: 0.5,
                rotateY: [0, 360],
                rotateX: [0, 360],
                transition: {
                    scale: {
                        type: "spring",
                        stiffness: 10,
                        damping: 1
                    },
                    opacity: {
                        duration: 1,
                        ease: "ease-out"
                    },
                    rotateY: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                    },
                    rotateX:
                    {
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear",
                    }
                },
            });
        } else {
            animation.start({
                scale: 1,
                opacity: 0,
                rotateY: 360,
                rotateX: 360,
                transition: {
                    scale: { duration: 2 },
                    opacity: { duration: 3 },
                    rotateY: { duration: 5 },
                    rotateX: { duration: 15 },
                },
            });// reset animation
        }
        console.log("animate STOP")

    }, [isHovered, animation])

    return (
        <Box justifyContent="center" alignItems="center" display="flex" overflow="visible" w="80px" h="80px" position="relative" zIndex="1"
            sx={{
                perspective: "600px"
            }}>
            <Link href={link} isExternal title={title} pos="absolute" zIndex="3">
                <Image
                    src={src}
                    fit="cover"
                    borderRadius="200px"
                    transition="transform 0.3s ease-out"
                    pos="relative"
                    zIndex="5"
                    pointerEvents="none"
                />

                <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    animate={animation}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        width: "80px",
                        height: "80px",
                        zIndex: "2",
                        position: "absolute",
                        top: "0px",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <Image src={src}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "200px",
                            position: "absolute",
                            zIndex: "1",
                        }} />
                    <Box style={{
                        width: "92%",
                        height: "92%",
                        borderRadius: "200px",
                        background: "white",
                        position: "absolute",
                        zIndex: "3",
                    }} />

                </motion.div>
            </Link>
        </Box>
    );
};