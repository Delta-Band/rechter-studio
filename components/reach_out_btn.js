import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { HandLeft } from '@styled-icons/ionicons-solid/HandLeft';
import { useTheme } from '@material-ui/core/styles';

function ReachOutBtn({ flip }) {
  const theme = useTheme();

  return (
    <motion.div
      onClick={() => {
        flip();
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
        // onClick={() => {
        //   setCardSide(cardSide === 'front' ? 'back' : 'front');
        // }}
        style={{
          position: 'absolute',
          rotate: -45,
          x: theme.spacing(1),
          y: '-1.5px'
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
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          Reach Out
        </Typography>
      </motion.div>
    </motion.div>
  );
}

export default ReachOutBtn;
