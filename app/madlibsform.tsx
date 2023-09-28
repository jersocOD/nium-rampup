import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    Box,
    FormLabel,
    Input,
    Button,
    Center,
    Text,
  } from '@chakra-ui/react'
  

/*
Once upon a time in the bustling world of academia at Berkeley, there was a software consulting club known as the "Binary Bananas." 
This wacky group of students was notorious for their unconventional approach to solving tech problems. Instead of traditional laptops, 
they used _____________ (noun) powered by _____________ (unconventional energy source) to code, and their favorite programming language 
was _____________ (ridiculously complex programming language). During their weekly meetings, they would wear 
_____________ (outrageous costume) and debate the most absurd software development theories, like the idea that debugging could be 
done by communicating with aliens through a _____________ (silly communication device).

But the most hilarious part of their club meetings was the snack time, where they would munch on _____________ (unexpected snack) 
while discussing the most bizarre project ideas, such as creating a software program that translated cat meows into human language or 
a dating app exclusively for robots. Their motto was "Coding, Chaos, and _____________ (random word)!" and they were determined to 
make the tech world laugh as they debugged their way through Berkeley's campus.

*/


type initialValuesType = {
    noun: string;
    source: string;
    language: string;
    costume: string;
    device: string;
    snack: string;
    word: string;
};

export const MadLibs = () => {
    const [madLibsText, setMadLibsText] = useState<string>(''); 

    const {
        register,
      handleSubmit,
      formState: { errors },
    } = useForm<initialValuesType>()
    
    const onSubmit: SubmitHandler<initialValuesType> = async (values) =>  {
        const generatedMadLibsText = `Once upon a time in the bustling world of academia at Berkeley, there was a software consulting club known as the "Binary Bananas." 
This wacky group of students was notorious for their unconventional approach to solving tech problems. Instead of traditional laptops, 
they used ${values.noun} powered by ${values.source} to code, and their favorite programming language was ${values.language}. During their weekly meetings, 
they would wear ${values.costume} and debate the most absurd software development theories, like the idea that debugging could be 
done by communicating with aliens through a ${values.device}.

But the most hilarious part of their club meetings was the snack time, where they would munch on ${values.snack} 
while discussing the most bizarre project ideas, such as creating a software program that translated cat meows into human language or 
a dating app exclusively for robots. Their motto was "Coding, Chaos, and ${values.word}!" and they were determined to 
make the tech world laugh as they debugged their way through Berkeley's campus.`;
    setMadLibsText(generatedMadLibsText);
    await new Promise(res => setTimeout(res, 10));
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    
    return (
    <div>
        <Center>
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <Box padding='5px' width='750px'>
                    <FormLabel>Enter a noun:</FormLabel>
                    {/* <Input placeholder='Noun' id='noun' name='noun'/> */}
                    <Input as={Input} id='noun' placeholder='noun' {...register("noun")} backgroundColor='white'/>
                </Box>
            
                <Box padding='5px' width='750px'>
                    <FormLabel>Enter an unconventional energy source:</FormLabel>
                    <Input as={Input} placeholder='unconventional energy source' type='text' id='source' {...register("source")} backgroundColor='white'/>
                </Box>
                
                <Box padding='5px' width='750px'>
                    <FormLabel>Enter a ridiculously complex programming language:</FormLabel>
                    <Input as={Input} placeholder='ridiculously complex programming language' type='text' id='language' {...register("language")} backgroundColor='white'/>
                </Box>

                <Box padding='5px' width='750px'>
                    <FormLabel>Enter an outrageous costume:</FormLabel>
                    <Input as={Input} placeholder='outrageous costume' type='text' id='costume' {...register("costume")} backgroundColor='white'/>
                </Box>
           
                <Box padding='5px' width='750px'>
                    <FormLabel>Enter a silly communication device:</FormLabel>
                    <Input as={Input} placeholder='silly communication device' type='text' id='device' {...register("device")} backgroundColor='white'/>
                </Box>

                <Box padding='5px' width='750px'>
                    <FormLabel>Enter an unexpected snack:</FormLabel>
                    <Input as={Input} placeholder='unexpected snack' type='text' id='snack' {...register("snack")} backgroundColor='white'/>
                </Box>
           
                <FormLabel>Enter a random word:</FormLabel>
                <Input as={Input} placeholder='random word' type='text' {...register("word")} backgroundColor='white'/>
            
                <Button className='bg-teal-600' colorScheme='teal' size='md' type='submit' marginTop='15px' color='#FFFFFF' variant="solid">
                    Submit
                </Button> 

            </form>
        </div>
        </Center>
        <Center>
            {madLibsText && (
            <div>
                <Text fontSize='lg' padding='60px' width='870px'>{madLibsText}</Text>
            </div>
            )}
        </Center>
        <div>
        </div>
    </div>
    )
};
  
export default MadLibs;