import React, {Component } from 'react';


export default class Header extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div className="row Models-pop mb-3 p-3"><h2 className="header-text">3D Models</h2>
            </div>
        )
    }
}
