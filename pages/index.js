import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import parse from 'html-react-parser';
// import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import { Box, useMediaQuery, Button } from '@material-ui/core';
// import { Box, useMediaQuery } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore as ExpandMoreIcon } from '@styled-icons/material/ExpandMore';
// import { Linkedin as LinkedinIcon } from '@styled-icons/bootstrap/Linkedin';
// import { cms } from '../store';
import { Page } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: 500
  },
  expandMoreIcon: {
    width: 30,
    transform: 'rotate(-90deg)'
  },
  lineHeight18: {
    lineHeight: '18px'
  },
  mainHeader: {
    fontSize: '5vh',
    lineHeight: '6vh'
  },
  statement: {
    '& *': {
      color: 'black !important'
    }
  }
}));

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'transparent',
    // borderBottom: '1px solid rgba(0, 0, 0, .125)',
    // marginBottom: -1,
    padding: 0,
    paddingLeft: 6,
    height: 50,
    minHeight: 'unset',
    '&$expanded': {
      minHeight: 'unset'
    },
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  content: {
    paddingLeft: 8,
    height: '100%',
    display: 'flex',
    margin: 0,
    alignItems: 'center',
    '&$expanded': {
      margin: 0,
      paddingLeft: 8
    }
  },
  expanded: {
    marginBottom: 0
  },
  expandIcon: {
    marginLeft: '-25px',
    '&$expanded': {
      transform: 'rotate(90deg)'
    }
  }
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingLeft: 33,
    paddingTop: 0,
    '& *': {
      lineHeight: '32.4px !important',
      fontFamily: theme.fontFamily,
      fontSize: 18
    },
    '& ul': {
      padding: 0,
      margin: 0,
      marginTop: theme.spacing(1),
      marginLeft: 18,
      listStyle: 'none'
    },
    '& ol': {
      padding: '0 0 0 17px',
      margin: 0,
      marginTop: theme.spacing(1)
    },
    '& li': {
      padding: 0,
      marginLeft: -17
    },
    '& li::before': {
      content: '""',
      display: 'inline-block',
      width: 10,
      marginRight: theme.spacing(2),
      height: 10,
      backgroundColor: 'black',
      borderRadius: 10
    }
  }
}))(MuiAccordionDetails);

const Home = () => {
  // Selectors
  // const careersCMS = useSelector(cms.selectors.careers);
  // const careersPageCMS = useSelector(cms.selectors.careersPage);
  // const footerCMS = useSelector(cms.selectors.footer);

  // State
  const [expanded, setExpanded] = useState(0);

  // Hooks
  const classes = useStyles();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Methods
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // function openEmail() {
  //   window.open(
  //     `mailto:${footerCMS.email}?subject=${careersPageCMS.mailToSubject}&body=${careersPageCMS.mailToBody}`,
  //     '_blank'
  //   );
  // }

  return (
    <Page gaLogPage='home'>
      <Box>Hero</Box>
      <Accordion expanded={expanded === 0} onChange={handleChange(0)}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon className={classes.expandMoreIcon} color='black' />
          }
          // aria-controls={`${careerItm.id}-content`}
          // id={`${careerItm.id}-header`}
        >
          <Typography className={classes.heading}>The Consulancy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display='flex' flexDirection='column' width='100%'>
            <Typography component='span'>Lorem Ipsum...</Typography>
            {/* <Box mt={3} mb={1}>
              <Button
                fullWidth
                color='primary'
                variant='outlined'
                style={{
                  borderWidth: 2
                }}
                onClick={openEmail}
              >
                <div style={theme.btnText}>Apply</div>
              </Button>
            </Box> */}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Page>
  );
  // return Animation;
};

export default Home;
