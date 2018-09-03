import React, { Component } from 'react';

export default class ModelContainer extends Component {
    render() {
        return (
            <div className='menuStyle'>
                <ul class='menubar list-group'>
                    <li class="list-group-item">{'People'}</li>
                    <li class="list-group-item">{'Films'}</li>
                    <li class="list-group-item">{'Starships'}</li>
                    <li class="list-group-item">{'Vehicles'}</li>
                    <li class="list-group-item">{'Species'}</li>
                    <li class="list-group-item">{'Planets'}</li>
                </ul>
            </div>
        )
    }
}
