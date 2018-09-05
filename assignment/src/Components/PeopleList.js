import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PeopleList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='containerBody'>
               {this.props.peoples.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                            <div className='row'>
                                <div className='col-2'><label><b>{'Name : '}</b></label></div>
                                <div className='col-10'>{c.name}</div>

                                <div className='col-2'><label><b>{'Gender : '}</b></label></div>
                                <div className='col-10'>{c.gender}</div>

                                <div className='col-2'><label><b>{'Date of Birth : '}</b></label></div>
                                <div className='col-10'>{c.birth_year}</div>

                                <div className='col-2'><label><b>{'Height : '}</b></label></div>
                                <div className='col-10'>{c.height}</div>

                                <div className='col-2'><label><b>{'Hair Color : '}</b></label></div>
                                <div className='col-10'>{c.hair_color}</div>

                                <div className='col-2'><label><b>{'Skin Color : '}</b></label></div>
                                <div className='col-10'>{c.skin_color}</div>

                                <div className='col-2'><label><b>{'Eye Color : '}</b></label></div>
                                <div className='col-10'>{c.eye_color}</div>
                            </div>
                            <button className='btn btn-primary'>{'Films'}</button>
                            <button className='btn btn-primary'>{'StarShips'}</button>
                            <button className='btn btn-primary'>{'Species'}</button>
                            <button className='btn btn-primary'>{'vehicles'}</button>
                    </div>
                    )}
               </div>
            </div>
        )
    }
}



PeopleList.propTypes = {
    peoples:PropTypes.object
}

PeopleList.defaultProps = {
    peoples:{}
}


export default PeopleList;