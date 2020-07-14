import React from 'react'
import {withStyles} from "@material-ui/styles"

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
    }
}

function DragableColorBox(props) {
    const {classes, color} = props
    return(
        <div style={{backgroundColor: color}} className={classes.root}>
            {props.name}
        </div>
    )
}

export default withStyles(styles)(DragableColorBox)