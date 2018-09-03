import React, { Component } from 'react';

export default class ModelContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='menuStyle'>
                <ul class="list-group">
                    <li class="list-group-item"><a href="#intro">Introduction</a></li>
                    <li class="list-group-item"><a href="#start">Getting started</a></li>
                    <li class="list-group-item"><a href="#base">Base URL</a></li>
                    <li class="list-group-item"><a href="#rate">Rate limiting</a></li>
                    <li class="list-group-item"><a href="#auth">Authentication</a></li>
                    <li class="list-group-item"><a href="#schema">JSON Schema</a></li>
                    <li class="list-group-item"><a href="#search">Searching</a></li>
                </ul>
            </div>
        )
    }
}
