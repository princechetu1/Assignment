import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ModelContainer extends Component {
    render() {
        return (
            <div className='menuStyle'>
                <ul className='menubar list-group'>
                    <li className="list-group-item">
                        <Link to='/people'>{'People'}</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/films'>{'Films'}</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/starships'>{'Starships'}</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/vechicles'>{'Vehicles'}</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/species'>{'Species'}</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/planets'>{'Planets'}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
