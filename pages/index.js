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
import { Plus as PlusIcon } from '@styled-icons/boxicons-regular/Plus';
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
    width: 30
    // transform: 'rotate(-90deg)'
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
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    },
    '&:last-of-type': {
      borderBottom: 'none'
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'transparent',
    // marginBottom: -1,
    padding: 0,
    paddingLeft: 6,
    height: 50,
    minHeight: 'unset',
    '&$expanded': {
      minHeight: 'unset'
    },
    display: 'flex',
    // flexDirection: 'row-reverse',
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
      transform: 'rotate(45deg)'
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

// Components
const Hero = () => {
  return (
    <Box
      display='flex'
      alignItems='flex-end'
      justifyContent='space-around'
      mb={6}
    >
      <Box
        fontSize='7vw'
        fontWeight={600}
        fontFamily='serif'
        lineHeight={1}
        pb={5}
      >
        Creative Consulting For Tech Businesses.
      </Box>
      <img src='/images/hero-art.png' style={{ width: '30vw' }} />
    </Box>
  );
};

const Section = ({ title, content, expanded, handleChange, index }) => {
  const classes = useStyles();

  return (
    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
      <AccordionSummary
        expandIcon={
          <PlusIcon className={classes.expandMoreIcon} color='black' />
        }
        // aria-controls={`${careerItm.id}-content`}
        // id={`${careerItm.id}-header`}
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display='flex' flexDirection='column' width='100%'>
          {content}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

const Home = () => {
  // Selectors
  // const careersCMS = useSelector(cms.selectors.careers);
  // const careersPageCMS = useSelector(cms.selectors.careersPage);
  // const footerCMS = useSelector(cms.selectors.footer);

  // State
  const [expanded, setExpanded] = useState(0);

  // Hooks
  // const classes = useStyles();
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
      <img src='/images/logo.svg' style={{ position: 'fixed' }} />
      <Hero />
      <Section
        handleChange={handleChange}
        expanded={expanded}
        index={0}
        title='The Consultancy'
        content='We help Entrepreneurs, engineers and innovators to communicate their ideas to other humans, in a way the users would want to consume them. You understand technology, we understand people.'
      />
      <Section
        handleChange={handleChange}
        expanded={expanded}
        index={2}
        title='Apply for Position'
        content='A general text (not devided to jobs) invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata'
      />
      <Section
        handleChange={handleChange}
        expanded={expanded}
        index={3}
        title='Contact Us'
        content='Lorem Ipsum'
      />
    </Page>
  );
  // return Animation;
};

export default Home;
