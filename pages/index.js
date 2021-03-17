import React, { Fragment, useState, useEffect } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Container,
  Box,
  TextField
} from '@material-ui/core';
import parser from 'ua-parser-js';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { HandLeft } from '@styled-icons/ionicons-solid/HandLeft';
import { LeftArrowAlt as GoBackIcon } from '@styled-icons/boxicons-regular/LeftArrowAlt';
import { SendPlane2 as SendIcon } from '@styled-icons/remix-fill/SendPlane2';
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
  // const upSm = useMediaQuery(theme.breakpoints.up('sm'));
  // const upMd = useMediaQuery(theme.breakpoints.up('md'));
  // const upLg = useMediaQuery(theme.breakpoints.up('lg'));

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
          position: 'relative',
          cursor: 'pointer'
        }}
        transition={{ type: 'spring', bounce: 0, delay: 2 }}
        animate={{
          width: 162,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          color: '#FFF'
        }}
      >
        <motion.div
          onClick={() => {
            setCardSide(cardSide === 'front' ? 'back' : 'front');
          }}
          style={{
            position: 'absolute',
            rotate: -45,
            x: theme.spacing(1)
          }}
          transition={{
            type: 'spring',
            delay: 1,
            duration: 1.2
          }}
          animate={{
            rotate: [null, -15, -45, -15, -45, -45],
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

  function SendBtn({ formComplete }) {
    const iconVariants = {
      open: {
        x: theme.spacing(2)
      },
      closed: {
        x: theme.spacing(1.5)
      }
    };

    const textVariants = {
      open: {
        opacity: 1
      },
      closed: {
        opacity: 0
      }
    };

    return (
      <motion.div
        onClick={() => {
          setCardSide(cardSide === 'front' ? 'back' : 'front');
        }}
        style={{
          height: '50px',
          borderRadius: '25px',
          border: `2px solid ${theme.palette.primary.main}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}
        transition={{ type: 'spring', bounce: 0 }}
        animate={{
          width: formComplete === 3 ? 131 : 50,
          backgroundColor:
            formComplete === 3 ? theme.palette.primary.main : '#FFF',
          color: formComplete === 3 ? '#FFF' : '#000',
          borderColor: formComplete === 3 ? theme.palette.primary.main : '#000',
          opacity: formComplete === 3 || formComplete === 2 ? 1 : 0.5,
          scale:
            formComplete === 3 || formComplete === 2
              ? 1
              : formComplete === 1
              ? 0.5
              : 0
        }}
      >
        <motion.div
          style={{
            position: 'absolute'
          }}
          variants={iconVariants}
          transition={{
            type: 'spring',
            duration: 1.2
          }}
          animate={formComplete === 3 ? 'open' : 'closed'}
        >
          <SendIcon size={27} style={{ transform: 'translateY(-1px)' }} />
        </motion.div>
        <motion.div
          style={{
            position: 'absolute',
            right: theme.spacing(2.5)
          }}
          transition={{ type: 'spring', bounce: 0, delay: 0 }}
          variants={textVariants}
          animate={formComplete === 3 ? 'open' : 'closed'}
        >
          <Typography
            style={{
              color: 'inherit',
              fontFamily: 'Domaine',
              fontSize: '18px'
            }}
          >
            Send
          </Typography>
        </motion.div>
      </motion.div>
    );
  }

  function SideFront() {
    return (
      <motion.div
        style={{
          opacity: 0,
          backfaceVisibility: 'hidden',
          pointerEvents: cardSide === 'front' ? 'all' : 'none'
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
          p={6}
          position='absolute'
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

  function SideBack() {
    // const [sending, setSending] = useState(false);
    // const [ok, setOK] = useState(false);
    const [formComplete, setFormComplete] = useState(0);
    const [name, setName] = useState('');
    const [from, setFrom] = useState('');
    const [email, setEmail] = useState('');
    const [nameIsValid, setNameIsValid] = useState(false);
    const [fromIsValid, setFromIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [validateName, setValaidateName] = useState(false);
    const [validateEmail, setValaidateEmail] = useState(false);
    const [validateFrom, setValaidateFrom] = useState(false);
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

    useEffect(() => {
      setNameIsValid(name.trim().length > 0);
    }, [name]);

    useEffect(() => {
      setFromIsValid(from.trim().length > 0);
    }, [from]);

    useEffect(() => {
      if (email.match(regexEmail)) {
        setEmailIsValid(true);
      } else {
        setEmailIsValid(false);
      }
    }, [email]);

    useEffect(() => {
      let complete = 0;
      complete += nameIsValid ? 1 : 0;
      complete += fromIsValid ? 1 : 0;
      complete += emailIsValid ? 1 : 0;
      setFormComplete(complete);
    }, [nameIsValid, fromIsValid, emailIsValid]);

    return (
      <motion.div
        style={{
          opacity: 0,
          pointerEvents: cardSide === 'back' ? 'all' : 'none'
        }}
        transition={{
          type: 'spring',
          bounce: 0,
          delay: cardSide === 'back' ? 0.25 : 0
        }}
        animate={{
          opacity: cardSide === 'back' ? 1 : 0
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          // justifyContent='center'
          height={1}
          width={1}
          p={3}
          position='absolute'
          left={0}
          top={0}
          style={{
            transform: 'rotateY(180deg)'
          }}
        >
          <Box width={1} mb={4}>
            <GoBackIcon
              onClick={() => {
                setCardSide('front');
              }}
              size={34}
              style={{
                transform: 'translateX(-6px)'
              }}
            />
          </Box>
          <form noValidate autoComplete='off'>
            <Typography variant='h2'>Hi,</Typography>
            <Box display='inline-flex' alignItems='center'>
              <Typography variant='h2' style={{ flexShrink: 0 }}>
                my name is{' '}
              </Typography>
              <Box mr={1} />
              <TextField
                label=''
                error={validateName && !nameIsValid}
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                onBlur={() => {
                  setValaidateName(true);
                }}
              />
              <Box mr={1} />
              <Typography variant='h2'>,</Typography>
            </Box>
            <Box display='inline-flex' alignItems='center'>
              <Typography variant='h2' style={{ flexShrink: 0 }}>
                I&apos;m from
              </Typography>
              <Box mr={1} />
              <TextField
                label=''
                error={validateFrom && !fromIsValid}
                value={from}
                onChange={(event) => {
                  setFrom(event.target.value);
                }}
                onBlur={() => {
                  setValaidateFrom(true);
                }}
              />
              <Box mr={1} />
              <Typography variant='h2'>,</Typography>
            </Box>
            <Typography variant='h2'>please email me at</Typography>
            <Box display='inline-flex' alignItems='center' width={1}>
              <TextField
                label=''
                style={{
                  width: '100%'
                }}
                error={validateEmail && !emailIsValid}
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onBlur={() => {
                  setValaidateEmail(true);
                }}
              />
              <Box mr={1} />
              <Typography variant='h2'>.</Typography>
            </Box>
          </form>
          <Box mb={5} />
          <SendBtn
            isValid={nameIsValid && fromIsValid && emailIsValid}
            formComplete={formComplete}
          />
        </Box>
      </motion.div>
    );
  }

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
                  <SideFront />
                  <SideBack />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
