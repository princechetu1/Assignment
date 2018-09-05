import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FilmList extends Component {
    render() {
        return (
            <div className='containerStyle'>
               <div className='row'>
                <div className='col-1'>
                    <label>{'Search'}</label>
                </div>
                <div className='col-11'>
                        <input type='text'/>
                </div>
               </div>
               <div className='containerBody'>
                {this.props.films.data.map((c, k) =>
                        <div key={k} className='filmCard'>
                        <div className='row'>
                                <div className='col-2'><label><b>{'Title :'}</b></label></div>
                                <div className='col-10'>{c.title}</div>
                                <div className='col-2'><label><b>{'Description :'}</b></label></div>
                                <div className='col-10'>{c.opening_crawl}</div>
                                <div className='col-2'><label><b>{'Diretor : '}</b></label></div>
                                <div className='col-10'>{c.director}</div>
                                <div className='col-2'><label><b>{'Producer : '}</b></label></div>
                                <div className='col-10'>{c.producer}</div>
                                <div className='col-2'><label><b>{'Release Date : '}</b></label></div>
                                <div className='col-10'>{c.release_date}</div>
                                <button className='btn btn-primary'>{'Characters'}</button>
                                <button className='btn btn-primary'>{'Planets'}</button>
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


FilmList.propTypes = {
    films:PropTypes.object
}

FilmList.defaultProps = {
    films:{}
}

export default FilmList;