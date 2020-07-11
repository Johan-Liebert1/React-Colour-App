import React, { Component } from 'react'
import ColorBox from './ColorBox'

// the loading of css files matters. in this case since palette is defined after index.css, the palette styles will override the index.css
import "rc-slider/assets/index.css"
import "./Palette.css"
import Slider from 'rc-slider'


export class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({level: level})
    }

    render() {
        const {colors} = this.props.palette
        const {level} = this.state
        let colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className="Palette">
                <div className='slider'>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}

export default Palette
