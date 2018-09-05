
import React, { Component } from 'react';

class VechicleList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='containerBody'>
               {this.props.vechicles.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                         <div className='row'>
                             <div className='col-2'><label><b>{'Name : '}</b></label></div>
                             <div className='col-10'>{c.name}</div>
                             <div className='col-2'><label><b>{'Model : '}</b></label></div>
                             <div className='col-10'>{c.model}</div>
                             <div className='col-2'><label><b>{'Cargo Capacity : '}</b></label></div>
                             <div className='col-10'>{c.cargo_capacity}</div>
                             <div className='col-2'><label><b>{'Consumables : '}</b></label></div>
                             <div className='col-10'>{c.consumables}</div>
                             <div className='col-2'><label><b>{'Passangers : '}</b></label></div>
                             <div className='col-10'>{c.passengers}</div>
                             <div className='col-2'><label><b>{'Crew : '}</b></label></div>
                             <div className='col-10'>{c.crew}</div>
                             <div className='col-2'><label><b>{'Max Atmosphiring Speed : '}</b></label></div>
                             <div className='col-10'>{c.max_atmosphering_speed}</div>
                             <div className='col-2'><label><b>{'Manufacturer : '}</b></label></div>
                             <div className='col-10'>{c.manufacturer}</div>
                             <div className='col-2'><label><b>{'Vechicle Class : '}</b></label></div>
                             <div className='col-10'>{c.vehicle_class}</div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'Pilots'}</button>
                            </div>
                        </div>
                    )}
               </div>
            </div>
        )
    }
}


export default VechicleList;