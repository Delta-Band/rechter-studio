import React, { Fragment, useState } from 'react';
import { Paper, Grid, Container, Box } from '@material-ui/core';
import parser from 'ua-parser-js';
import { motion } from 'framer-motion';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { BackSide, FrontSide } from '../components';
import { Head } from '../shared';

export async function getServerSideProps(context) {
  console.log(context.req.headers['user-agent']);
  const deviceType =
    parser(context.req.headers['user-agent']).device.type || 'desktop';
  return {
    props: {
      deviceType,
      data: 'my data'
    } // will be passed to the page component as props
  };
}

export default function Home({ deviceType }) {
  const [cardSide, setCardSide] = useState('front');
  console.log(`deviceType: ${deviceType}`);
  // const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  // const upMd = useMediaQuery(theme.breakpoints.up('md'));
  // const upLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Fragment>
      <Head />
      <Box
        height='100%'
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
                  <FrontSide
                    focus={cardSide === 'front'}
                    flip={() => {
                      setCardSide('back');
                    }}
                  />
                  <BackSide
                    focus={cardSide === 'back'}
                    flip={() => {
                      setCardSide('front');
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
