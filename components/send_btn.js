import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { HandLeft } from '@styled-icons/ionicons-solid/HandLeft';
import { ThumbsUp } from '@styled-icons/entypo/ThumbsUp';
import emailjs from 'emailjs-com';

function SendBtn({ formComplete, name, from, email, flip }) {
  const [working, setWorking] = useState(false);
  const [gotcha, setGotcha] = useState(false);
  const theme = useTheme();

  return (
    <motion.div
      onClick={() => {
        if (formComplete !== 3) return;
        if (gotcha) {
          flip();
          setTimeout(function () {
            setGotcha(false);
          }, 1000);
        }
        const serviceID = 'service_k1ae8xr';
        const templateID = 'new_lead';
        const templateParams = {
          lead_name: name,
          lead_from: from,
          lead_email: email
        };
        const userID = 'user_54jeSZNlO93cckYtc9Sd7';
        setWorking(true);
        emailjs.send(serviceID, templateID, templateParams, userID).then(
          function (response) {
            console.log('SUCCESS!', response.status, response.text);
            setWorking(false);
            setGotcha(true);
            setTimeout(function () {
              flip();
              setTimeout(function () {
                setGotcha(false);
              }, 1000);
            }, 5000);
          },
          function (error) {
            console.log('FAILED...', error);
            setWorking(false);
          }
        );
      }}
      style={{
        height: '50px',
        borderRadius: '25px',
        border: `2px solid ${theme.palette.primary.main}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        cursor: 'pointer',
        pointerEvents: formComplete === 3 ? 'all' : 'none'
      }}
      transition={{ type: 'spring', bounce: 0 }}
      animate={{
        width: gotcha ? 160 : formComplete === 3 && !working ? 131 : 50,
        backgroundColor: gotcha
          ? 'transparent'
          : formComplete === 3
          ? theme.palette.primary.main
          : 'transparent',
        color: gotcha ? '#AFAFAF' : formComplete === 3 ? '#FFF' : '#000',
        borderColor: gotcha
          ? '#AFAFAF'
          : formComplete === 3
          ? theme.palette.primary.main
          : '#000',
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
          position: 'absolute',
          cursor: 'pointer',
          rotate: gotcha ? 0 : -45
        }}
        transition={{
          type: 'spring',
          duration: 1.2
        }}
        animate={{
          x: theme.spacing(1.4)
        }}
      >
        {gotcha ? (
          <ThumbsUp size={27} style={{ transform: 'translateY(-2px)' }} />
        ) : (
          <HandLeft size={27} style={{ transform: 'translateY(-2px)' }} />
        )}
      </motion.div>
      {/* <motion.div
        style={{
          position: 'absolute',
          cursor: 'pointer',
          rotate: -45
        }}
        transition={{
          type: 'spring',
          duration: 1.2
        }}
        animate={{
          opacity: working ? 1 : 0,
          x: working ? 10 : 0
        }}
      >
        <HandLeft size={27} style={{ transform: 'translateY(-1px)' }} />
      </motion.div> */}
      <motion.div
        style={{
          position: 'absolute',
          right: theme.spacing(2.5),
          cursor: 'pointer'
        }}
        transition={{
          type: 'spring',
          duration: 0.3,
          delay: formComplete === 3 ? 0.2 : 0
        }}
        animate={{
          opacity: gotcha ? 1 : formComplete === 3 && !working ? 1 : 0
        }}
      >
        <Typography
          style={{
            color: 'inherit',
            fontSize: '21px',
            fontFamily: 'Welsheim',
            fontWeight: 'bold',
            fontStyle: 'italic',
            cursor: 'pointer'
          }}
        >
          {gotcha ? 'Gotcha' : 'Send'}
        </Typography>
      </motion.div>
    </motion.div>
  );
}

export default SendBtn;
