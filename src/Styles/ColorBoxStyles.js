import chroma from "chroma-js"

export default  {
    ColorBox: {
        height: props => 
            props.showingFullPalette ? '25%' : '50%',
        width: '20%',

        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        "&:hover button": {
            opacity: '1'
        }
    },
    copyText:{
        color: props => 
            chroma(props.background).luminance() >= 0.40 ? 'black': 'white'
    },
    colorName: {
        color: props => 
            chroma(props.background).luminance() <= 0.19 ? 'white' : 'black'
    },
    seeMore: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        bottom: '0',
        color: props => 
            chroma(props.background).luminance() <= 0.19 ? 'white' : 'black',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        color: props => 
            chroma(props.background).luminance() <= 0.7 ? 'white' : 'black',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        right: '50%',
        marginRight: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        lineHeight: '30px',
        textTransform: 'uppercase',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        opacity: '0'
    },
    boxContent : {
        position: 'absolute',
        padding: '10px',
        left: '0px',
        bottom: '0px',
        width: '100%',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay : {
        opacity: '0',
        zIndex: '0',
        width: '100%',
        height: '100%',
    },
    showOverlay: {
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
        transition: 'transform 0.6s ease-in-out',
    },
    copiedMessage : {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        flexDirection: 'column',
        '& h1': {
            fontWeight: '400',
            textShadow: '1px 2px black',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '100%',
            textAlign: 'center',
            marginBottom: '0',
        },
        '& p': {
            fontSize: '2rem',
            fontWeight: '100',
        }
    },

    showCopiedMessage: {
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s',

    }
}

