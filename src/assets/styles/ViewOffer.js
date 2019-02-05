const muiStyles = theme => ({
    paper: {
        width: '70%',
        margin: 'auto',
        paddingBottom: theme.spacing.unit * 20,
        paddingLeft: theme.spacing.unit * 5,
        paddingTop: theme.spacing.unit * 5,
    },
    headtitle: {
        maxHeight: 20,
    },
    title: {

    },
    subtitle: {
        paddingTop: theme.spacing.unit * 2
    },
    iconColor: {
        // color: '#7f7f7f',
    },
    star: {
        borderRadius: '5px',
        // color: '#7f7f7f',
    },
    privacy: {
        backgroundColor: '#f1f1f5',
        height: '15%',
        margin: '0',
    },
    buyout: {
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
    }
})

export default muiStyles;