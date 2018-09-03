import React, { Component } from 'react';
import '../Style/style.css';
import HeaderBar from '../Components/Header';
import PeopleList from '../Components/PeopleList';
import PlanetsList from '../Components/PlanetsList';
import FilmsList from '../Components/FilmsList';
import VechicleList from '../Components/VechicleList';
import SpeciesList from '../Components/SpeciesList';
import StarShipList from '../Components/StarShipList';
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
                        <PeopleList />
                        <FilmsList />
                        <VechicleList />
                        <SpeciesList />
                        <StarShipList />
                        <PlanetsList />
                    </div>
                </div>
            </div>
        );
    }
}