const muiStyles = theme => ({
    root: {
        width: '65%',
        margin: 'auto',
        marginTop: theme.spacing.unit * 10,
        paddingTop: theme.spacing.unit * 13,
        paddingLeft: theme.spacing.unit * 13,
        paddingRight: theme.spacing.unit * 13,
        paddingBottom: theme.spacing.unit * 10,
    },
    title: {
        fontWeight: 800,
        color: '#494949',
        fontSize: 36,
    },
    article: {
        marginTop: theme.spacing.unit * 2,
        color: '#717171',
        fontWeight: 400,
        lineHeight: '30px',
        fontSize: 18,
    },

});

export default muiStyles;