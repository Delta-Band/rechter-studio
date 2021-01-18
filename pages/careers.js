import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import { Box, useMediaQuery, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore as ExpandMoreIcon } from '@styled-icons/material/ExpandMore';
import { Linkedin as LinkedinIcon } from '@styled-icons/bootstrap/Linkedin';
import { cms } from '../store';
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

const LinkedInBtn = () => {
  const footerCMS = useSelector(cms.selectors.footer);
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Button
      onClick={() => {
        window.open(footerCMS.linkedInURL, '_blank');
      }}
      style={{
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        transform: 'translateY(8px)'
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        style={{
          height: '100%'
        }}
      >
        <LinkedinIcon size={30} />
        <Box className={classes.lineHeight18} ml={2}>
          <div style={theme.btnText}>You can find us here</div>
        </Box>
      </Box>
    </Button>
  );
};

export default function Careers() {
  // Selectors
  const careersCMS = useSelector(cms.selectors.careers);
  const careersPageCMS = useSelector(cms.selectors.careersPage);
  const footerCMS = useSelector(cms.selectors.footer);

  // State
  const [expanded, setExpanded] = useState(false);

  // Hooks
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Methods
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function openEmail() {
    window.open(
      `mailto:${footerCMS.email}?subject=${careersPageCMS.mailToSubject}&body=${careersPageCMS.mailToBody}`,
      '_blank'
    );
  }

  // Root
  return (
    <Page
      gaLogPage='careers'
      style={{
        backgroundColor: theme.palette.secondary.main,
        backgroundImage: 'url(/images/pattern20.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '50px 50px'
      }}
    >
      <Box className={classes.root} mt={isMobile ? 4 : 10}>
        <Box display='flex' flexDirection='column'>
          <Box mb={3} display='flex' flexDirection='row'>
            <Box display='flex' className={classes.mainHeader} fontWeight={400}>
              {careersPageCMS.mainHeader}
            </Box>
            <Box flexGrow={1}></Box>
            {!isMobile && <LinkedInBtn />}
          </Box>
          <Box
            lineHeight={1.8}
            mb={6}
            fontWeight={400}
            className={classes.statement}
          >
            {parse(careersPageCMS.statement)}
          </Box>
          {careersCMS.length === 0 && (
            <Box display='flex' flexDirection={isMobile ? 'column' : 'row'}>
              <Box
                lineHeight={1.4}
                fontSize={34}
                mr={isMobile ? 0 : 4}
                mb={isMobile ? 4 : 0}
                width={isMobile ? '100%' : '50%'}
              >
                {careersPageCMS.weAreNotLooking}
              </Box>
              <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width={isMobile ? '100%' : '50%'}
              >
                <Button
                  fullWidth
                  size='large'
                  color='primary'
                  variant='outlined'
                  onClick={openEmail}
                  style={{
                    borderWidth: 2,
                    borderColor: 'black',
                    fontSize: 16
                  }}
                >
                  <div style={theme.btnText}>Send CV</div>
                </Button>
              </Box>
            </Box>
          )}
        </Box>
        <Box pl={isMobile ? 1 : 2}>
          {careersCMS.map((careerItm) => (
            <Accordion
              key={careerItm.id}
              expanded={expanded === careerItm.id}
              onChange={handleChange(careerItm.id)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className={classes.expandMoreIcon}
                    color='black'
                  />
                }
                aria-controls={`${careerItm.id}-content`}
                id={`${careerItm.id}-header`}
              >
                <Typography className={classes.heading}>
                  {careerItm.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display='flex' flexDirection='column' width='100%'>
                  <Typography component='span'>
                    {parse(careerItm.description)}
                  </Typography>
                  <Box mt={3} mb={1}>
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
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        {isMobile && (
          <Box display='flex' height={70} mt={2} style={{ marginLeft: '-4px' }}>
            <LinkedInBtn />
          </Box>
        )}
      </Box>
    </Page>
  );
}
