import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import {Link} from 'react-router-dom'
import MiniPalette from "./MiniPalette"
import styles from "./Styles/PaletteListStyles"

import { CSSTransition, TransitionGroup } from "react-transition-group";

export class PaletteList extends Component {
    constructor(props){
        super(props)
        this.goToPalette = this.goToPalette.bind(this)
    }
    goToPalette(id) {
        this.props.history.push("/palette/" + id)
    }

    render() {
        const {palettes, classes} = this.props
        
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </nav>
                    
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition
                                key={palette.id}
                                classNames='fade'
                                timeout={500}
                            >
                                <MiniPalette 
                                    {...palette} 
                                    handleClick={() => this.goToPalette(palette.id)}
                                    deletePalette={this.props.deletePalette}
                                    key={palette.id}
                                    id={palette.id}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    
                </div>
                
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)
