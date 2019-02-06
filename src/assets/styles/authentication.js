// import Signinbackground from '../img/bg-form.jpg';

const muiStyles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
          width: 500,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: theme.spacing.unit * 20,
        },
      },
      paper: {
        width: 'auto',
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px`,
        // backgroundImage: `url(${'../img/bg-form.jpg'})`,
        background: 'radial-gradient(circle, #ffffff, #c4ced8)',
        borderRadius: 20,
      },
      avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
      },
      signIn: {
        fontFamily: [
          'Roboto',
          'sans-serif',
        ],
        color: '#315065',
        fontStyle: 'bold',
        fontWeight: '700',

      },
      text: {
        backgroundColor: '#9c9eab',
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
      },
      submit: {
        marginTop: theme.spacing.unit * 3,
        padding: `  ${theme.spacing.unit * 2}px 
                    ${theme.spacing.unit * 4}px
                    ${theme.spacing.unit * 2}px
                    ${theme.spacing.unit * 4}px
                    `,
        float: 'right',
        borderRadius: 10,
        backgroundColor: '#ff9c02',
        fontSize: 24,
        fontWeight: 900,
        color: '#7b3900',
        fontFamily: [
            'Roboto',
            'sans-serif',
        ],  
      },
      '&:hover': {
        backgroundColor: '#fc7603',
      },
      input: {
        display: 'none',
      },
});

export default muiStyles;