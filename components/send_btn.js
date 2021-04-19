import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SendPlane2 as SendIcon } from '@styled-icons/remix-fill/SendPlane2';
import { HandLeft } from '@styled-icons/ionicons-solid/HandLeft';

function SendBtn({ formComplete, name, from, email }) {
  const [working, setWorking] = useState(false);
  const theme = useTheme();

  return (
    <motion.div
      onClick={() => {
        const serviceID = 'service_k1ae8xr';
        const templateID = 'new_lead';
        const templateParams = {
          lead_name: name,
          lead_from: from,
          lead_email: email
        };
        const userID = 'user_54jeSZNlO93cckYtc9Sd7';
        // emailjs.send(serviceID, templateID, templateParams, userID).then(
        //   function (response) {
        //     console.log('SUCCESS!', response.status, response.text);
        //   },
        //   function (error) {
        //     console.log('FAILED...', error);
        //   }
        // );
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
        width: formComplete === 3 && !working ? 131 : 50,
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
          position: 'absolute',
          cursor: 'pointer',
          rotate: -45
        }}
        transition={{
          type: 'spring',
          duration: 1.2
        }}
        animate={{
          opacity: working ? 0 : 1,
          x:
            formComplete === 3 && !working
              ? theme.spacing(2)
              : theme.spacing(1.5)
        }}
      >
        <HandLeft size={27} style={{ transform: 'translateY(-1px)' }} />
      </motion.div>
      <motion.div
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
      </motion.div>
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
          opacity: formComplete === 3 && !working ? 1 : 0
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
          Send
        </Typography>
      </motion.div>
    </motion.div>
  );
}

export default SendBtn;
