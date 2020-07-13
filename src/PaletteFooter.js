import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import styles from "./Styles/PaletteFooterStyles"

export class PaletteFooter extends Component {
    render() {
        const {paletteName, classes} = this.props
        return (
            <footer className={classes.PaletteFooter}>
                {paletteName}
            </footer>
        )
    }
}

export default withStyles(styles)(PaletteFooter)
