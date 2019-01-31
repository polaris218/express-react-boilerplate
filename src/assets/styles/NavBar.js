const muiStyles = theme => ({
    main: {
        width: 'auto',
    },
    paper: {
        backgroundColor: '#20326b',
    },
    img: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    },
    addoffer: {
        marginLeft: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 5,
        backgroundColor: '#ff9c02',
        borderRadius: '20px',
        padding: '15px',
    },
    search: {
        display: 'flex',
        justify: 'center',
        marginTop: theme.spacing.unit * 6,
    },
    searchbar: {
        display: 'flex',
        border: '0px',
        borderRadius: '20px',
        borderStyle: 'solid',
        backgroundColor: '#19295b',
    },
    searchInput: {
        flex: 1,
        color: '#838aa4',
        fontSize: '20px',
        paddingLeft: theme.spacing.unit * 2,
        width: theme.spacing.unit * 45,
    },
    iconButton: {
        display: 'flex',
        padding: 5,
        marginTop: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 2,
        color: '#838aa4',
    },
})

export default muiStyles;