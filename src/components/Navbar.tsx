// src/components/Navbar.tsx
import { Box, HStack, Link } from '@chakra-ui/react'
import { NavLink, useLocation } from 'react-router-dom'
import AnimatedLogo from './AnimatedLogo'

export const Navbar = () => {

  const location = useLocation();


  return (


    // floating nav bar
    <Box h="70px" w="50%" minW="600px" mx="auto" my="15px" px="5px"
      bg="gray.400" borderRadius="2xl" display="flex" justifyContent="center" alignItems="center">

      <HStack justify="space-around" align="center" w="100%">
        <Box h="50px" w="50px" right="5px" pos="relative"><AnimatedLogo /></Box>
        <Link as={NavLink} to="/" textStyle="menu"
          textDecoration={location.pathname == "/" ? "underline" : ""}>about</Link>
        <Link as={NavLink} to="/archive" textStyle="menu"
          textDecoration={location.pathname == "/archive" ? "underline" : ""}>archive</Link>
        <Link as={NavLink} to="/" textStyle="menu"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>team</Link>
        <Link as={NavLink} to="/faq" textStyle="menu"
          textDecoration={location.pathname == "/faq" ? "underline" : ""}>FAQ</Link>
        <Link as={NavLink} to="/" textStyle="menu"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>sponsors</Link>
        <Link as={NavLink} to="/" textStyle="menu" bg="white" color="gray.400" p="2px 30px" borderRadius="md"
          textDecoration={location.pathname == "/x" ? "underline" : ""}>join us!</Link>
      </HStack>
    </Box>


    // <Box bg="gray.300" px={4} py={2} shadow="lg">
    //   <Flex justify="space-between" align="center">
    //     <Text fontWeight="bold">Info.RP</Text>
    //     <HStack spacing={4}>
    // <Link as={NavLink} to="/">Home</Link>
    // <Link as={NavLink} to="/archive">Archive</Link>
    // <Link as={NavLink} to="/faq">FAQ</Link>
    //     </HStack>
    //   </Flex>
    // </Box>
  )
}