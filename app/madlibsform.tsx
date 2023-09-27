import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
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

    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<any>(undefined);

    useEffect(() => {
        console.log('formData: ', formData)
    }, [formData])
    return (

    <div>
        <div>
    <Formik
        initialValues={{
            noun: 'hola',
            source: '',
            language: '',
            costume: '',
            device: '',
            snack: '',
            word: '',
        }}
        onSubmit={(values) => {
            console.log("Oh my lord React, just update them!!!! ");
            console.log('values passed in :', values)
            if (!loading) {
                setLoading(true);
                // formData = JSON.stringify(values);
                setFormData(JSON.stringify(values));
            }
            setLoading(false);
            if (!loading) {
                if (formData) {
                    console.log(formData);
                    console.log("working");
                }
            }
        }}
        validator={() => ({})}
        >
            {(props: FormikProps<initialValuesType>) => (
        <Form  onSubmit={props.handleSubmit}>

                <FormLabel>Enter a noun:</FormLabel>
                {/* <Input placeholder='Noun' id='noun' name='noun'/> */}
                <Field as={Input} id='noun' name='noun' placeholder='Noun' />
            
                <FormLabel>Enter an unconventional energy source:</FormLabel>
                <Field as={Input} placeholder='unconventional energy source' type='text' id='source' name='source'/>
            
                <FormLabel>Enter a ridiculously complex programming language:</FormLabel>
                <Field as={Input} placeholder='ridiculously complex programming language' type='text' id='language' name='language'/>
            
                <FormLabel>Enter an outrageous costume:</FormLabel>
                <Field as={Input} placeholder='outrageous costume' type='text' id='costume' name='costume'/>
            
           
                <FormLabel>Enter a silly communication device:</FormLabel>
                <Field as={Input} placeholder='silly communication device' type='text' id='device' name='device'/>
            
                <FormLabel>Enter an unexpected snack:</FormLabel>
                <Field as={Input} placeholder='unexpected snack' type='text' id='snack' name='snack'/>
            
           
                <FormLabel>Enter a random word:</FormLabel>
                <Field as={Input} placeholder='random word' type='text' name='word'/>
            
            
            <Button color='teal' size='md' type='submit'>
                Submit
            </Button>
        </Form>
            )}
    </Formik>
  </div>
    </div>
    )
};
  
  export default MadLibs;