// src/components/Navbar.tsx
import { Box, chakra, HStack, Link, shouldForwardProp } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatedLogoConstant } from './AnimatedLogo'
import { isValidMotionProp, motion, useScroll, useTransform } from 'framer-motion';

export const Navbar = () => {

  const location = useLocation();

  // const MotionBox = chakra(motion.div, {
  //   shouldForwardProp: (prop) =>
  //     isValidMotionProp(prop) || shouldForwardProp(prop),
  // })

  // const { scrollY } = useScroll();
  // const width = useTransform(scrollY, [0, 500], ['100%', '50%']);
  // const height = useTransform(scrollY, [0, 500], ['85px', '75px']);
  // const top = useTransform(scrollY, [0, 500], [0, 10]);
  // const fontSize = useTransform(scrollY, [0, 500], ['1.75rem', '1.15rem']);
  // const borderRadius = useTransform(scrollY, [0, 500], ['0px', '16px']);

  return (
    // <MotionBox
    //   data-label="navbar" minH="75px" minW="600px" transformOrigin="bottom center"
    //   margin="0px auto 0px" px="5px" position="sticky" zIndex={500}
    //   display="flex" justifyContent="center" alignItems="center"
    //   bg="gray.400" boxShadow="lg" style={{
    //     width,
    //     height,
    //     top,
    //     fontSize,
    //     borderRadius
    //   }}>
    <Box data-label="navbar" h="75px" w="50%" minW="650px" margin="0px auto 0px" px="5px" fontSize="1.1rem" zIndex={500}
      bg="gray.400" boxShadow="xl" borderRadius="2xl" display="flex" justifyContent="center" alignItems="center" pos="sticky" top="10px">


      {/* todo(): add a small-web version */}

      <HStack justify="space-around" align="center" w="100%" >
        <Box h="55px" w="55px" right="5px" pos="relative"><AnimatedLogoConstant /></Box>
        <Link as={NavLink} to="/" textStyle="menu" fontSize="inherit"
          textDecoration={location.pathname == "/" ? "underline" : ""}>about</Link>
        <Link as={NavLink} to="/archive" textStyle="menu" fontSize="inherit"
          textDecoration={location.pathname == "/archive" ? "underline" : ""}>archive</Link>
        <Link as={NavLink} to="/" textStyle="menu" fontSize="inherit"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>team</Link>
        <Link as={NavLink} to="/faq" textStyle="menu" fontSize="inherit"
          textDecoration={location.pathname == "/faq" ? "underline" : ""}>FAQ</Link>
        <Link as={NavLink} to="/" textStyle="menu" fontSize="inherit"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>sponsors</Link>
        <Link as={NavLink} to="/" textStyle="menu" bg="white" color="gray.400" p="2px 22px" borderRadius="md" fontSize="inherit"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>join us!</Link>
      </HStack>
    </Box>
    // </MotionBox>
  )
}