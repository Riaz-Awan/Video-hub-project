import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { Carousel } from 'react-responsive-carousel';

const headingoptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: 'lg',
};

const Home = () => {
  return (
    <>
      <Box>
        <Mycarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p='16'>
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. 
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const Mycarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} w={'full'} h={'full'} objectFit={'cover'}  />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoptions}>
        Watch the Future{' '}
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} w={'full'} h={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingoptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} w={'full'} h={'full'} objectFit={'cover'}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        Gaming on Colsole
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} w={'full'} h={'full'} objectFit={'cover'}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoptions}>
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
