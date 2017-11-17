import React from 'react'
import {Icon} from './Icon.jsx'
export class Bookmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "../../assets/icon.png"
        }    
    }

    render() {
        const bookmarkStyle = {
            height: '200px',
            width: '120px'
        }
        const titleStyle = {
            height: '30%'
        }
        return (
            <div className="bookmark" style={bookmarkStyle}>
                <div><Icon url={this.state.icon}/></div>
                <a style={titleStyle} href={this.props.href}>{this.props.children}</a>
            </div>
        )
    }
}