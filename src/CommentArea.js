import React from 'react'
import {Textarea,
        Text,
        Button,
        Box} from '@chakra-ui/react'

function CommentArea() {
    return (
    <div>
        <Text>Let us know what you think!</Text>
        <Box fontSize="lg" fontWeight="bold" bg='white'>
            <Textarea placeholder="Enter text"/>
            <Button>Submit</Button>
        </Box>
    </div>
    );
}

export default CommentArea;