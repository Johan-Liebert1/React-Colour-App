export default {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        position: 'relative',
        padding: '0.5rem',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover svg': {
            opacity: 1
        },
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: "hidden"
    },
    title: {
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        margin: '0',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        justifyContent: 'center',
        position: 'relative'
    },
    miniColor: {
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-3.9px'
    },

    DeleteIcon: {
        color: 'white',
        backgroundColor: 'red',
        width: '20px',
        height: '20px',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 50,
        padding: '10px',
        opacity: 0,
        transition: 'all 0.3s ease-in-out'
    }
}
