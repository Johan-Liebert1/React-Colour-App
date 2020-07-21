import React, { Component } from 'react'
import { withStyles } from "@material-ui/styles";
import styles from "./Styles/MiniPaletteStyles"
import DeleteIcon from "@material-ui/icons/Delete"
import { render } from '@testing-library/react';

// this will be passed into the props under the name clasees. The whole style object will be passed

class MiniPalette extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(event){
        event.stopPropagation()
        this.props.deletePalette(this.props.id)
    }

    render() {
        const {classes, paletteName, colors, handleClick} = this.props
        const miniColorBoxes = colors.map(color => (
            <div 
                className={classes.miniColor} 
                style={{backgroundColor: color.color}}
                key={color.name}
            />
        ))
        
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon 
                    className={classes.DeleteIcon}
                    onClick={this.handleDelete}
                />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>{paletteName}</h5>
            </div>
        )
    }
}

export default withStyles(styles)(MiniPalette)