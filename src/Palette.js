import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from "./Navbar"
// the loading of css files matters. in this case since palette is defined after index.css, the palette styles will override the index.css
import "./Palette.css"
import PaletteFooter from './PaletteFooter'
import {withStyles} from "@material-ui/styles"
import styles from "./Styles/PaletteStyles"

export class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({level: level})
    }

    changeFormat(value){
        this.setState({format: value})
    }

    render() {
        const {colors, paletteName, id} = this.props.palette
        const {classes} = this.props
        const {level, format} = this.state
        let colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id}
                moreUrl ={`/palette/${id}/${color.id}`}
                showingFullPalette={true}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar 
                    evel={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                    showSlider
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName}/>
            </div>
        )
    }
}

export default withStyles(styles)(Palette)
