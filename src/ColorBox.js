import React, { Component } from 'react'
import "./ColorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from "chroma-js"
import {withStyles} from "@material-ui/styles"


const styles = {
    ColorBox: {
        height: props => 
            props.showingFullPalette ? '25%' : '50%',
        width: '20%',

        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        "&:hover button": {
            opacity: '1'
        }
    },
    copyText:{
        color: props => 
            chroma(props.background).luminance() >= 0.40 ? 'black': 'white'
    },
    colorName: {
        color: props => 
            chroma(props.background).luminance() <= 0.19 ? 'white' : 'black'
    },
    seeMore: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        border: 'none',
        right: '0',
        bottom: '0',
        color: props => 
            chroma(props.background).luminance() <= 0.19 ? 'white' : 'black',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        color: props => 
            chroma(props.background).luminance() <= 0.7 ? 'white' : 'black',
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        right: '50%',
        marginRight: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        lineHeight: '30px',
        textTransform: 'uppercase',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        opacity: '0'
    }
}


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
                        className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copied-message ${copied && 'show'}`}>
                        <h1>COPIED</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
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
