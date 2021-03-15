import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#00695c',
      main: '#9baba9',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontSize: 12,
  },
  overrides: {
    MuiTabs: {
      flexContainer: {
        justifyContent: 'center',
      },
    },
    MuiRadio: {
      root: {
        padding: '4px',
      },
    },
    MuiAccordionSummary: {
      root: {
        minHeight: '48px !important',
      },
      content: {
        margin: '0 !important',
      },
      expandIcon: {
        padding: '2px',
      },
    },
    MuiAccordionDetails: {
      root: {
        padding: '0px',
        margin: '0px',
        display: 'unset',
      },
    },
    MuiOutlinedInput: {
      multiline: {
        padding: '12px',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        width: '100%',
        maxWidth: 'unset',
        height: '100%',
      },
    },
    MuiDialogContent: {
      root: {
        padding: '0px !important',
        paddingTop: '0px !important',
        paddingLeft: '16px !important',
        paddingRight: '16px !important',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
  },
})

export default theme
