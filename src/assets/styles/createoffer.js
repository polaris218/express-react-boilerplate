const muiStyle = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 5,
        padding: theme.spacing.unit * 10,
        width: '60%',
        margin: 'auto',
    },
    input: {
        display: 'none',
    },
    offercontent: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
    imageLabel: {
        [theme.breakpoints.up(1700 + theme.spacing.unit * 2)]: {
            marginLeft: theme.spacing.unit * 3,
        },
        marginTop: theme.spacing.unit * 3,
    },
    imageLabelUpload: {
        marginTop: theme.spacing.unit * 3,
    },
    title: {
        backgroundColor: '#f1f1f5',
        borderRadius: 10,
        paddingLeft: 20,
        fontWeight: 500,
        fontSize: 16,
    },
    description: {
        backgroundColor: '#f1f1f5',
        borderRadius: 10,
        paddingLeft: 20,
        // height: 100,
        marginTop: theme.spacing.unit * 2,
    },
    startDate: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        fontWeight: 500,
        backgroundColor: '#f1f1f5',
    },
    date: {
        verticalAlign: 'bottom'
    },
    price: {
        backgroundColor: '#f1f1f5',
        width: '30%',
        fontFamily: 'Roboto, sans-serif',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
    },
    formCategory: {
        width: 200,
        marginLeft: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 2,
        backgroundColor: '#f1f1f5',
    },
    addrPhoneSite: {
        backgroundColor: '#f1f1f5',
        padding: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        borderRadius: '10px',
    },
    proceed: {
        marginTop: theme.spacing.unit * 3,
        padding: `  ${theme.spacing.unit * 2}px 
                    ${theme.spacing.unit * 4}px
                    ${theme.spacing.unit * 2}px
                    ${theme.spacing.unit * 4}px
                    `,
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
});

export default muiStyle;