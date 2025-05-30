// src/routes/Home.tsx
import { Header } from "../pages/Home/Header";
import { Box } from "@chakra-ui/react";
import FoldableFAQ from "../components/Foldable";

export const Home = () => {
  return (
    <Box>
      <Header />
      <Box
        pt={5}
        pb={10}
        minH="calc(100vh - 80px)" // Adjust 80px to your actual header height
        display="flex"
        alignItems="center"
      >
        <FoldableFAQ />
      </Box>
    </Box>
  );
};
