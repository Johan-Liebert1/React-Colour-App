import React from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./Styles/MiniPaletteStyles"

// this will be passed into the props under the name clasees. The whole style object will be passed

function MiniPalette(props) {
    const {classes, paletteName, colors, handleClick} = props
    const miniColorBoxes = colors.map(color => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}}
            key={color.name}
        />
    ))
    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName}</h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)