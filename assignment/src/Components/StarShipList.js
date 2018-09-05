
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class StarShipList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='containerBody'>
               {this.props.starships.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                            <div className='row'>
                            <div className='col-2'><label><b>{'Name : '}</b></label></div>
                            <div className='col-10'>{c.name}</div>
                            <div className='col-2'><label><b>{'Model : '}</b></label></div>
                            <div className='col-10'>{c.model}</div>
                            <div className='col-2'><label><b>{'Passengers : '}</b></label></div>
                            <div className='col-10'>{c.passengers}</div>
                            <div className='col-2'><label><b>{'Starship Class : '}</b></label></div>
                            <div className='col-10'>{c.starship_class}</div>
                            <div className='col-2'><label><b>{'Manufacturer : '}</b></label></div>
                            <div className='col-10'>{c.manufacturer}</div>
                            <div className='col-2'><label><b>{'Crew : '}</b></label></div>
                            <div className='col-10'>{c.crew}</div>
                            <div className='col-2'><label><b>{'Consumables : '}</b></label></div>
                            <div className='col-10'>{c.consumables}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'StarShips'}</button>
                            <button className='btn btn-primary'>{'Species'}</button>
                            <button className='btn btn-primary'>{'vehicles'}</button>
                            </div>
                        </div>
                    )}
               </div>
            </div>
        )
    }
}

StarShipList.propTypes = {
    starships:PropTypes.object
}

StarShipList.defaultProps = {
    starships:{}
}


export default StarShipList;