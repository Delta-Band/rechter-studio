import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import cx from 'classnames';
import { useOverflow } from 'use-overflow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { GA } from '../services';
import { footer } from '../store';

const useStyles = makeStyles((theme) => ({
  page: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    overflowY: 'auto',
    position: 'fixed',
    background: 'white',
    zIndex: 2
  },
  bleed: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '60px 5vw 136px'
  },
  lg: {
    padding: '70px 7vw 136px'
  },
  xl: {
    padding: '70px 15vw 136px'
  }
}));

export default function Page({ children, className, gaLogPage, style }) {
  const classes = useStyles();
  const verticalRef = React.useRef(null);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up('xl'));
  const isLG = useMediaQuery(theme.breakpoints.up('lg'));
  const { refYOverflowing, refYScrollEnd } = useOverflow(verticalRef);

  console.log('here');

  useEffect(() => {
    GA.logPageView(gaLogPage);
  }, []);

  useEffect(() => {
    dispatch(footer.actions.show(refYScrollEnd));
  }, [refYScrollEnd]);

  useEffect(() => {
    dispatch(footer.actions.show(!refYOverflowing));
  }, [refYOverflowing]);

  return (
    <motion.div
      ref={verticalRef}
      className={cx(className, classes.page)}
      style={style}
      initial='exit'
      animate='enter'
      exit='exit'
      id='page'
      variants={{
        exit: {
          opacity: 0,
          x: 100,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 40
          }
        },
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 200,
            damping: 40
          }
        }
      }}
    >
      <div
        className={cx(classes.bleed, className, {
          [classes.lg]: isLG,
          [classes.xl]: isXL
        })}
      >
        {children}
      </div>
    </motion.div>
  );
}
