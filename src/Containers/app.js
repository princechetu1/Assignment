import React, { Component } from 'react';
import HeaderBar from '../containers/header';
import ContentBar from '../containers/contentbar';

export default class App extends Component {
    render() {
        return  (
            <div>
                <HeaderBar />
                <ContentBar />
            </div>
        );
    }
}