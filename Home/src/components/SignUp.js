import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Kapi's tube</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'cyan.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'cyan.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'cyan.500'}
            />
  
            <Button colorScheme={'cyan'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'cyan'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Signup;