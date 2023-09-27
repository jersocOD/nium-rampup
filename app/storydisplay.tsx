import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const StoryDisplay = ({ values }) => {
  // Define your Mad Libs story template
  const storyTemplate = `Once upon a time in the bustling world of academia at Berkeley, there was a software consulting club known as the "Binary Bananas." 
  This wacky group of students was notorious for their unconventional approach to solving tech problems. Instead of traditional laptops, 
  they used ${values.noun} powered by ${values.source} to code, and their favorite programming language 
  was ${values.language}. During their weekly meetings, they would wear ${values.costume} and debate the most absurd software development theories, like the idea that debugging could be 
  done by communicating with aliens through a ${values.device}.

  But the most hilarious part of their club meetings was the snack time, where they would munch on ${values.snack} 
  while discussing the most bizarre project ideas, such as creating a software program that translated cat meows into human language or 
  a dating app exclusively for robots. Their motto was "Coding, Chaos, and ${values.word}!" and they were determined to 
  make the tech world laugh as they debugged their way through Berkeley's campus.`;

  return (
    <Box>
      <Text>{storyTemplate}</Text>
    </Box>
  );
};

export default StoryDisplay;
