
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetsList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='containerBody'>
               {this.props.planets.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                            <div className='col-2'><label><b>{'Name : '}</b></label></div>
                            <div className='col-10'>{c.name}</div>
                            <div className='col-2'><label><b>{'Gravity : '}</b></label></div>
                            <div className='col-10'>{c.gravity}</div>
                            <div className='col-2'><label><b>{'Population : '}</b></label></div>
                            <div className='col-10'>{c.population}></div>
                            <div className='col-2'><label><b>{'Rotation Period : '}</b></label></div>
                            <div className='col-10'>{c.rotation_period}</div>
                            <div className='col-2'><label><b>{'Surface Water : '}</b></label></div>
                            <div className='col-10'>{c.surface_water}</div>
                            <div className='col-2'><label><b>{'Terrain : '}</b></label></div>
                            <div className='col-10'>{c.terrain}</div>
                            <div className='col-2'><label><b>{'Orbital Period : '}</b></label></div>
                            <div className='col-10'>{c.orbital_period}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'Peoples'}</button>
                            </div>
                        </div>
                    )}
               </div>
            </div>
        )
    }
}


PlanetsList.propTypes = {
    planets:PropTypes.object
}

PlanetsList.defaultProps = {
    planets:{}
}

export default PlanetsList;