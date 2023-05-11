import { Box, 
        Flex, 
        Spacer,
        Input,
        Link } from '@chakra-ui/react';

function Navbar() {
  return (
    <Flex
      alignItems="center"
      backgroundColor="red.700"
      padding={3}
      color="white"
    >
      <Box>
        <Link mr="5"> Home </Link>
        <Link mr="5"> Recipes </Link>
      </Box>

      <Box>
        <Input placeholder='Search for a recipe' />
      </Box>

      <Spacer />

      <Box>
        <Link mr="5"> Login </Link>
        <Link> Sign Up </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
