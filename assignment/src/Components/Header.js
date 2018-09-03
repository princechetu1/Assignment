import React, {Component } from 'react';

export default class Header extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div className='headerStyle'>
                <h2>{'STAR WARS'}</h2>
                <h5>{'Find everything here'}</h5>
            </div>
        )
    }
}
