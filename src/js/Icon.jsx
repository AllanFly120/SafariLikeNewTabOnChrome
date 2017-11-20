import React from 'react'
import {fetchIcon} from './fetchIcon'

export class Icon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIcon: '../../assets/icon.png'
        }
    }

    async componentWillMount() {
        this.state.pageIcon = await fetchIcon(this.props.url);
    }

    render() {
        return (
        <img src={this.state.pageIcon}/>
    )}
}