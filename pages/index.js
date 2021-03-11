import React, { Fragment, useState } from 'react';
import { Typography, Paper, Grid, Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
import { HandLeft } from '@styled-icons/ionicons-solid/HandLeft';
import { Head } from '../shared';

export async function getServerSideProps(context) {
  // console.log(context.req.headers['user-agent']);
  // const isMobile = Boolean(
  //   context.req.headers['user-agent'].match(
  //     /iPhone|Android|BlackBerry|Windows Phone/i
  //   )
  // );
  return {
    props: {
      data: 'my data'
    } // will be passed to the page component as props
  };
}
export default function Home() {
  const [cardSide, setCardSide] = useState('front');
  const theme = useTheme();

  function ReachOutBtn() {
    return (
      <motion.div
        onClick={() => {
          setCardSide(cardSide === 'front' ? 'back' : 'front');
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: '25px',
          background: 'red',
          border: '2px solid black',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: '#000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}
        transition={{ type: 'spring', bounce: 0, delay: 2 }}
        animate={{
          width: 162,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          color: '#FFF'
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            rotate: -25,
            x: theme.spacing(1)
          }}
          transition={{
            type: 'spring',
            delay: 1,
            duration: 1.2
          }}
          animate={{
            rotate: [null, -55, -15, -55, -25, -25],
            x: [
              theme.spacing(1),
              theme.spacing(1),
              theme.spacing(1),
              theme.spacing(1),
              theme.spacing(1),
              theme.spacing(1.8)
            ]
          }}
        >
          <HandLeft size={27} />
        </motion.div>
        <motion.div
          style={{
            opacity: 0,
            position: 'absolute',
            right: theme.spacing(2)
          }}
          transition={{ type: 'spring', bounce: 0, delay: 2.2 }}
          animate={{
            opacity: 1
          }}
        >
          <Typography
            style={{
              color: 'inherit',
              fontFamily: 'Domaine',
              fontSize: '18px'
            }}
          >
            Reach Out
          </Typography>
        </motion.div>
      </motion.div>
    );
  }

  function SideFront() {
    return (
      <motion.div
        style={{
          opacity: 0
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          delay: cardSide === 'front' ? 0.25 : 0
        }}
        animate={{
          opacity: cardSide === 'front' ? 1 : 0
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height={1}
          width={1}
          position='absolute'
          p={6}
          left={0}
          top={0}
        >
          <Typography variant='h1'>
            Creative Consultancy For Tech Businesses.
          </Typography>
          <Box mb={5} />
          <ReachOutBtn />
        </Box>
      </motion.div>
    );
  }

  // function SideBack() {
  //   return <Box>Back Side</Box>;
  // }

  return (
    <Fragment>
      <Head />
      <Box
        height='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Container
          fixed
          style={{
            width: '340px',
            padding: 0
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <motion.div
                transition={{ type: 'spring', bounce: 0.5, duration: 1.5 }}
                style={{
                  scale: 0,
                  y: '15%'
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: '0%',
                  rotateY: cardSide === 'front' ? 0 : 180
                }}
              >
                <Paper
                  style={{
                    height: '560px',
                    position: 'relative'
                  }}
                >
                  <SideFront />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
