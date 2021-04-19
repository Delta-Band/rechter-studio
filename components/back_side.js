import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField } from '@material-ui/core';
import SendBtn from './send_btn';
import { FlipCard } from '../shared';

function BackSide({ focus, flip }) {
  // eslint-disable-next-line no-unused-vars
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
    <FlipCard show={focus} backSide>
      <Typography
        variant='h3'
        onClick={() => {
          flip();
        }}
      >
        Reach Out
      </Typography>
      <form noValidate autoComplete='off' style={{ textAlign: 'left' }}>
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
      <SendBtn
        isValid={nameIsValid && fromIsValid && emailIsValid}
        formComplete={3}
        name={name}
        from={from}
        email={email}
      />
    </FlipCard>
  );
}

export default BackSide;
