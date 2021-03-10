import React, { Fragment } from 'react';
import { Typography, Paper, Grid, Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
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
  const theme = useTheme();

  return (
    <Fragment>
      <Head />
      <Container
        fixed
        style={{
          width: '340px'
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper
              style={{
                padding: theme.spacing(6)
              }}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
              >
                <Typography variant='h1'>
                  Creative Consultancy For Tech Businesses.
                </Typography>
                <motion.div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: '25px',
                    background: 'red'
                  }}
                  transition={{ type: 'spring', bounce: 0.4 }}
                  animate={{
                    width: 200
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}
