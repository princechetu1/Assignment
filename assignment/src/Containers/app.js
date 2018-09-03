import React, { Component } from 'react';
import '../Style/style.css';
import HeaderBar from '../Components/Header';
import ContentBar from '../Components/Contentbar';
import MenuBar from '../Components/MenuBar';

export default class App extends Component {
    render() {
        return  (
            <div>
                <div className='row'>
                    <div className='col'>
                        <HeaderBar />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <MenuBar />
                    </div>
                    <div className='col-9'>
                        <ContentBar />
                    </div>
                </div>
            </div>
        );
    }
}