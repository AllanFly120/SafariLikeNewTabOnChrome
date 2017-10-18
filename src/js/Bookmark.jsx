import React from 'react'

export class Bookmark extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.picture}</div>
                <a href={this.props.href}>{this.props.name}</a>
            </div>
        )
    }
}