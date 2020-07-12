import React from 'react'
import { withStyles } from "@material-ui/styles";

// this will be passed into the props under the name clasees. The whole style object will be passed
const styles = {
    root: {
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '5px',
        position: 'relative',
        padding: '0.5rem',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
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
    }
}

function MiniPalette(props) {
    const {classes, paletteName, colors} = props
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))
    return (
        <div className={classes.root}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}</h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)