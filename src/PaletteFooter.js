import React, { Component } from 'react'

export class PaletteFooter extends Component {
    render() {
        const {paletteName} = this.props
        return (
            <footer className="Palette-footer">
                {paletteName}
            </footer>
        )
    }
}

export default PaletteFooter
