import { Box, 
    Flex, 
    Link } from '@chakra-ui/react';

function Footer() {
    return (
        <Box position="fixed" bottom={0} left={0} right={0}>
            <Flex
                alignItems="center"
                backgroundColor="black"
                padding={3}
                color="white"
            >
                <Box>
                    <Link mr="5"> Privacy </Link>
                    <Link mr="5"> About us </Link>
                    <Link mr="5"> Contact us </Link>
                </Box>
            </Flex>
        </Box>
    );
}

export default Footer;
