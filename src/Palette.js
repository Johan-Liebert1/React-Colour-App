import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from "./Navbar"

// the loading of css files matters. in this case since palette is defined after index.css, the palette styles will override the index.css
import "./Palette.css"

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
        const {level, format} = this.state
        let colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id}
                moreUrl ={`/palette/${id}/${color.id}`}
                showLink={true}
            />
        ))
        return (
            <div className="Palette">
                <Navbar 
                    evel={level} 
                    changeLevel={this.changeLevel} 
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                    {colorBoxes}
                </div>

                <footer className="Palette-footer">
                    {paletteName}
                </footer>
            </div>
        )
    }
}

export default Palette
