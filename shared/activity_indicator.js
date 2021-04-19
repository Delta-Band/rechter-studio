import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
  },
  animatedItemExiting: {
    animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
    transform: 'translateY(-200%)'
  },
  '@keyframes myEffect': {
    '0%': {
      transform: 'scale(0.0)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)'
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-200%)'
    }
  }
}));

function Spinner() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      style={{
        width: '80%',
        height: '80%',
        position: 'realtive'
      }}
    >
      <div
        style={{
          width: '100%',
          heighty: '100%',
          border: '0.5rem solid rgba(255, 255, 255, 0.2)',
          borderTop: '0.5rem solid white',
          boxSizing: 'border-box',
          top: 0,
          left: 0
        }}
      ></div>
    </div>
  );
}

export default Spinner;
