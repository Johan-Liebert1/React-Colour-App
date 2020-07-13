import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import PaletteFooter from "./PaletteFooter"
import Navbar from "./Navbar"
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import styles from "./Styles/PaletteStyles"


export class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            format: 'hex'
        }
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorToFilterBy) {
        var shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
              allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1)
    }

    changeFormat(value){
        this.setState({format: value})
    }

    render() {
        const {classes} = this.props
        const {id} = this.props.palette

        const colorBoxes = this._shades.map(color => 
            <ColorBox 
                key={color.name} 
                name={color.name} 
                background={color[this.state.format]} 
                showingFullPalette={false}
            />
        )
        return (
            <div className={classes.Palette}>
                <Navbar
                    handleChange={this.changeFormat}
                    showSlider={false} 
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>

                <PaletteFooter paletteName={this.props.palette.paletteName}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette)
