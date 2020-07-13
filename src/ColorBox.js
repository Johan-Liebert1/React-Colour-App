import React, { Component } from 'react'
import "./ColorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from "chroma-js"

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
        const {name, background, moreUrl, showLink} = this.props
        const {copied} = this.state
        const isDarkColor = chroma(background).luminance() <= 0.10
        const isLightColor = chroma(background).luminance() >= 0.40

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{backgroundColor:background}} className="ColorBox">
                    <div 
                        style={{backgroundColor:background}} 
                        className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copied-message ${copied && 'show'}`}>
                        <h1>COPIED</h1>
                        <p className={`${isLightColor && 'dark-text'}`}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={isDarkColor && 'light-text'}>{name}</span>
                        </div>
                        <button className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</button>
                    </div>
                    {showLink && (
                    <Link to={this.props.moreUrl} onClick={event => event.stopPropagation()}>
                        <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
