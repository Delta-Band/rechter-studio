import React, { Fragment, useState } from 'react';
import {
  Paper,
  Grid,
  Container,
  Box,
  Typography,
  Link
} from '@material-ui/core';
import parser from 'ua-parser-js';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
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
  const theme = useTheme();
  // const classes = useStyles();
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
            width: '330px',
            padding: 0
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
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
                    height: '500px',
                    width: '100%',
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
            <Grid
              item
              xs={12}
              container
              justify='space-between'
              align='center'
              style={{ padding: theme.spacing(2) }}
            >
              <Grid item>
                <motion.div
                  style={{
                    opacity: 0.2,
                    display: 'inline-block',
                    // marginTop: theme.spacing(3),
                    padding: theme.spacing(1),
                    cursor: 'pointer'
                  }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                >
                  <Link
                    style={{ color: 'inherit' }}
                    href='https://delta.band'
                    target='_blank'
                    rel='noopener'
                  >
                    <img src='delta_logo.svg' />
                  </Link>
                </motion.div>
              </Grid>
              <Grid item>
                <Typography style={{ opacity: 0.2, padding: '5px' }}>
                  Rechter. © 2021
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
