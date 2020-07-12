import React, { Component } from 'react'
import "./ColorBox.css"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'

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
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{backgroundColor:background}} className="ColorBox">
                    <div 
                        style={{backgroundColor:background}} 
                        className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copied-message ${copied && 'show'}`}>
                        <h1>COPIED</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    {showLink && (
                    <Link to={this.props.moreUrl} onClick={event => event.stopPropagation()}>
                        <span className="see-more">More</span>
                    </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox
