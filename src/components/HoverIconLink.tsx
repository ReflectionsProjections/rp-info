import { Box, Image, Link } from "@chakra-ui/react"
import React from "react";

interface HoverIconLinkProps {
    link: string;
    src: string;
    title?: string;
}

export const HoverIconLink: React.FC<HoverIconLinkProps> = ({ link, src, title }) => {
    return (
        <Box zIndex="3" justifyContent="center" alignItems="center" overflow="visible" w="80px" h="80px">
            <Link href={`https://${link}`} isExternal title={title}>
                <Image
                    src={src}
                    fit="cover"
                    borderRadius="100px"
                    transition="transform 0.3s ease-out"
                    _hover={{ transform: "scale(1.1)" }}
                />
            </Link>
        </Box>
    );
};