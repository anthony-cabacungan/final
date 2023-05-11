import { 
        Box, 
        Text,
        Stack,
        Checkbox,
        Image,
        Flex,
        HStack,
        Spacer } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'
import CommentArea from "./CommentArea";

function Home() {
  return (
    <div >
        <Flex direction="column" justifyContent="center" alignItems="center" bg='red.100' padding={6}>
            <Flex maxW="1100">
                <Flex direction="column" >
                    <Text fontSize="4xl" fontWeight="bold"> Cream of Mushroom Soup </Text>
                    <HStack>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                        <StarIcon></StarIcon>
                    </HStack>

                    <br />
                    <Box>
                        <Text fontSize="lg" fontWeight="bold"> Ingredients </Text>
                        <Stack spacing={1}>
                            <Checkbox borderColor="black">5 ounces shitake mushrooms</Checkbox>
                            <Checkbox borderColor="black">5 ounces of portobello mushrooms</Checkbox>
                            <Checkbox borderColor="black">5 ounces fresh cremini mushrooms</Checkbox>
                            <Checkbox borderColor="black">1 tablespoon of olive oil</Checkbox>
                            <Checkbox borderColor="black">1/4 lb unsalted butter</Checkbox>
                            <Checkbox borderColor="black">1 cup chopped yellow onion</Checkbox>
                            <Checkbox borderColor="black">1 carrot chopped</Checkbox>
                            <Checkbox borderColor="black">1 spring fresh thyme</Checkbox>
                        </Stack>
                    </Box>
                    <br />
                    <Box>
                        <Text fontSize="lg" fontWeight="bold"> Directions </Text>
                        <Text fontSize="lg" fontWeight="bold"> Step 1 </Text>
                        <Text> Simmer mushrooms, broth, onion, and thyme in a large heavy saucepan until vegetables are 
                                tender, 10 to 15 minutes. </Text>
                        <Text fontSize="lg" fontWeight="bold"> Step 2 </Text>
                        <Text> Carefully transfer the hot mixture to a blender or food processor. 
                                Cover and hold lid down with a potholder;
                                pulse until creamy but still with some chunks of vegetable. </Text>
                        <Text fontSize="lg" fontWeight="bold"> Step 3 </Text>
                        <Text> Melt butter in the same saucepan. Whisk in flour until smooth.
                                Whisk in salt and pepper. Slowly whisk in half-and-half and mushroom mixture. </Text>
                        <Text fontSize="lg" fontWeight="bold"> Step 4 </Text>
                        <Text> Bring soup to a boil and cook, stirring constantly, until thickened. </Text>
                        <Text fontSize="lg" fontWeight="bold"> Step 5 </Text>
                        <Text> Stir in sherry. Taste and season with salt and pepper if needed. </Text>
                    </Box>
                </Flex>
                <Spacer />
                <Box maxW="500">
                    <Image src='https://cafedelites.com/wp-content/uploads/2018/11/Cream-of-Mushroom-Soup-IMAGE-135.jpg' />
                </Box>
            </Flex>
            <CommentArea></CommentArea>
        </Flex>
    </div>
  );
}

export default Home;
