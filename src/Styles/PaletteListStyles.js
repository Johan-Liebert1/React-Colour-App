export default {
    root: {
        backgroundColor: 'rgb(40,40,40)',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        color: 'white',
        '& a' :{
            textDecoration: 'none',
            color: 'white',
            padding: '5px 10px',
            border: '2px solid white',
            borderRadius: '8px'
        },
        '& a:hover' :{
            color: 'black',
            backgroundColor: 'white'
        }
        
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}
