import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@material-ui/core';

export default function FlipCard({ children, show, backSide }) {
  return (
    <motion.div
      style={{
        opacity: 0,
        backfaceVisibility: 'hidden',
        pointerEvents: show ? 'all' : 'none',
        // zIndex: show ? 1 : 0,
        display: 'flex'
      }}
      transition={{
        type: 'spring',
        duration: 0.25,
        delay: show ? 0.25 : 0
      }}
      animate={{
        opacity: show ? 1 : 0
      }}
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-between'
        textAlign='center'
        height={1}
        width={1}
        p={6}
        position='absolute'
        left={0}
        top={0}
        zIndex={show ? 1 : -1}
        style={{
          transform: backSide ? 'rotateY(180deg)' : 'unset'
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
}
