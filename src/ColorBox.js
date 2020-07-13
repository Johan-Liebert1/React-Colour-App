import React, { Component } from 'react'
import styles from "./Styles/ColorBoxStyles"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"


export class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({copied: true}, () => {
            // inorder to stop the animation
            setTimeout(() => {
                this.setState({copied: false})
            }, 1500);
        })
    }

    render() {
        const {name, background, moreUrl, showingFullPalette, classes} = this.props
        const {copied} = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{backgroundColor:background}} className={classes.ColorBox}>
                    <div 
                        style={{backgroundColor:background}} 
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                    />
                    <div className={`${classes.copiedMessage} ${copied && classes.showCopiedMessage}`}>
                        <h1>COPIED</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showingFullPalette && (
                    <Link to={moreUrl} onClick={event => event.stopPropagation()}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox)
