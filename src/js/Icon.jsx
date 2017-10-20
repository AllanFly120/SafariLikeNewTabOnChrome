import React from 'react'

export class Icon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultImg: '../../assets/icon.png'
        }
    }
    render() {
        return (
        <img src={this.state.defaultImg}/>
    )}
}