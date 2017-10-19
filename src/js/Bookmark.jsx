import React from 'react'

export class Bookmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "../../assets/icon.png"
        }    
    }

    render() {
        return (
            <div className="bookmark">
                <div><img src={this.state.icon}/></div>
                <a href={this.props.href}>{this.props.children}</a>
            </div>
        )
    }
}