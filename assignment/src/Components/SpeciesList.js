
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class SpeciesList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='containerBody'>
               {this.props.species.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                             <div className='col-2'><label><b>{'Name : '}</b></label></div>
                             <div className='col-10'>{c.name}</div>
                             <div className='col-2'><label><b>{'Language : '}</b></label></div>
                             <div className='col-10'>{c.language}</div>
                             <div className='col-2'><label><b>{'Average Lifespan : '}</b></label></div>
                             <div className='col-10'>{c.average_lifespan}</div>
                             <div className='col-2'><label><b>{'Classification : '}</b></label></div>
                             <div className='col-10'>{c.classification}</div>
                             <div className='col-2'><label><b>{'Designation : '}</b></label></div>
                             <div className='col-10'>{c.designation}</div>
                             <div className='col-2'><label><b>{'Eye Color : '}</b></label></div>
                             <div className='col-10'>{c.eye_colors}</div>
                             <div className='col-2'><label><b>{'Skin Colors : '}</b></label></div>
                             <div className='col-10'>{c.skin_colors}</div>
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

SpeciesList.propTypes = {
    species: PropTypes.object
}

SpeciesList.defaultProps = {
    species: {}
}


export default SpeciesList;