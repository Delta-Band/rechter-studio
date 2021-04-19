import React from 'react';
import { Typography } from '@material-ui/core';
import ReachOutBtn from './reach_out_btn';
import { FlipCard } from '../shared';

function FrontSide({ focus, flip }) {
  return (
    <FlipCard show={focus}>
      <Typography variant='h3'>Rechter.</Typography>
      <Typography variant='h1'>
        Creative Consultancy For Tech Businesses.
      </Typography>
      <ReachOutBtn flip={flip} />
    </FlipCard>
  );
}

export default FrontSide;
