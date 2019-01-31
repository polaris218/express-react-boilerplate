const muiStyle = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 5,
        backgroundColor: '#7c7c7c',
    },
    backtotop: {
        backgroundColor: '#294457',
        color: '#ffffff',
        fontSize: '16px',
        fontWeight: 400,
    },
    aboutus: {
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: theme.spacing.unit * 25,
            marginTop: theme.spacing.unit * 3,
            // margin: 'auto',
        },
        fontWeight: 1000,
        fontSize: 18,
        color: '#ffffff',
    },
    article: {
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginLeft: theme.spacing.unit * 25,
            // margin: 'auto',
        },
        marginRight: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 2,
        color: '#ffffff',
    },
    grid: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
})

export default muiStyle;