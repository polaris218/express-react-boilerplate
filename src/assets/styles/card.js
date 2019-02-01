const muiStyles = theme => ({
    root: {
        width: '100%',
        margin: 'auto',
    },
    card: {
        display: 'flex',
        
        paddingTop: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
    },
    cover: {
      display: 'inline-block',
      width: '150px',
    },
    content: {
        display: 'inline-block',
        flex: '1 0 auto',
        
    },
    offerdesc: {
        color: '#fc7603',
        fontSize: '24px',
    },
    date: {
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10,
        marginLeft: theme.spacing.unit * 4,
        fontSize: 20
    },
    iconbutton: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        marginLeft: theme.spacing.unit * 4,
    }
})

export default muiStyles;