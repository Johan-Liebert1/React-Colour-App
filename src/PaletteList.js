import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles'
import {Link} from 'react-router-dom'
import MiniPalette from "./MiniPalette"
import styles from "./Styles/PaletteListStyles"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CheckIcon from '@material-ui/icons/Check'
import CloseIcon from '@material-ui/icons/Close'

import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'

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
                <Dialog open={false}>
                    <DialogTitle>
                        Delete this Palette?
                    </DialogTitle>         
                    <List>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <strong>Delete</strong>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                <strong>Cancel</strong>
                            </ListItemText>
                        </ListItem>
                    </List>   
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)
