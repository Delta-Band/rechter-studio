import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();
const {
  breakpoints,
  typography: { pxToRem }
} = defaultTheme;

const theme = createMuiTheme({
  // breakpoints: {
  //   values: {
  //     tablet: 640,
  //     laptop: 1024,
  //     desktop: 1280
  //   }
  // },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#FFBEBE',
      dark: '#07003C',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#FFBEBE',
      dark: '#ba000d',
      contrastText: '#000'
    }
  },
  typography: {
    fontFamily: ['Domaine', 'Welsheim'].join(','),
    lineHeight: '1.8em',
    allVariants: {
      color: '#06003B'
    },
    body1: {
      fontFamily: 'Welsheim',
      fontWeight: 100,
      fontSize: pxToRem(18),
      lineHeight: '30px',
      padding: 0,
      [breakpoints.down('xs')]: {
        fontSize: pxToRem(16)
      }
    },
    // p: {
    //   fontFamily: 'Work Sans',
    //   fontWeight: 400,
    //   fontSize: pxToRem(18),
    //   lineHeight: 30,
    //   padding: 0,
    //   [breakpoints.down('xs')]: {
    //     fontSize: pxToRem(16)
    //   }
    // },
    h1: {
      fontFamily: 'Domaine',
      fontWeight: 500,
      fontSize: pxToRem(54),
      [breakpoints.down('xs')]: {
        fontSize: pxToRem(42),
        lineHeight: pxToRem(59)
      }
    },
    h2: {
      fontFamily: 'Domaine',
      fontWeight: 500,
      fontSize: pxToRem(24),
      lineHeight: pxToRem(46),
      [breakpoints.down('xs')]: {
        fontSize: pxToRem(24)
      }
    },
    h3: {
      fontFamily: 'Welsheim',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textAlign: 'center',
      fontSize: pxToRem(36),
      lineHeight: pxToRem(30),
      [breakpoints.down('xs')]: {
        fontSize: pxToRem(30)
      }
    }
    // h4: {
    //   fontFamily: 'Work Sans',
    //   fontWeight: 300,
    //   fontSize: pxToRem(22),
    //   [breakpoints.down('xs')]: {
    //     fontSize: pxToRem(18)
    //   }
    // },
    // caption: {
    //   fontSize: pxToRem(14)
    // },
    // overline: {
    //   fontFamily: 'Work Sans',
    //   fontWeight: 300,
    //   fontSize: pxToRem(18)
    // }
  },
  overrides: {
    // MuiCssBaseline: {
    //   '@global': {
    //     '*::-webkit-scrollbar': {
    //       width: '0.4em'
    //     },
    //     '*::-webkit-scrollbar-track': {
    //       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    //     },
    //     '*::-webkit-scrollbar-thumb': {
    //       backgroundColor: 'rgba(0,0,0,.1)',
    //       outline: '1px solid slategrey'
    //     }
    //   }
    // },
    MuiInputBase: {
      input: {
        height: pxToRem(29),
        padding: 0,
        fontFamily: 'Domaine',
        fontWeight: 500,
        fontSize: pxToRem(24),
        // color: '#FFBEBE',
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(24)
        }
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          bottom: '4px'
        },
        '&:before': {
          bottom: '4px',
          borderWidth: '2px !important'
        }
      }
    },
    MuiFormControl: {
      root: {
        height: pxToRem(29)
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 35
      }
    }
    // MuiLink: {
    //   underlineHover: {
    //     textDecoration: 'underline',
    //     cursor: 'pointer',
    //     '&:hover': {
    //       textDecoration: 'underline'
    //     }
    //   }
    // },
    // MuiButton: {
    //   root: {
    //     fontFamily: 'Work Sans',
    //     fontWeight: 500,
    //     borderRadius: 0
    //   },
    //   outlinedPrimary: {
    //     borderWidth: '2px',
    //     borderRadius: 0,
    //     '&:hover': {
    //       borderWidth: '2px'
    //     }
    //   }
    // },
    // MuiOutlinedInput: {
    //   root: {
    //     borderRadius: 0
    //   }
    // }
    // MuiButton: {
    //   label: {
    //     fontSize: 16,
    //     transform: 'translateY(1px)'
    //   },
    //   containedPrimary: {
    //     '&:hover': {
    //       backgroundColor: '#4452bf'
    //     }
    //   }
    // },
    // MuiRadio: {
    //   root: {
    //     color: 'white'
    //   },
    //   colorPrimary: {
    //     color: 'white !important'
    //   }
    // },
    // MuiFormControlLabel: {
    //   label: {
    //     color: 'white'
    //   }
    // },
    // MuiOutlinedInput: {
    //   input: {
    //     // backgroundColor: 'white'
    //   }
    // },
    // MuiInputLabel: {
    //   outlined: {
    //     color: '#5668FF'
    //   }
    // }
  },
  transition: '1s cubic-bezier(.21,.47,.49,.92)',
  fastTransition: '0.4s cubic-bezier(.21,.47,.49,.92)'
});

export default theme;
