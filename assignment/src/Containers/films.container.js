import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import FilmsList from '../Components/FilmsList';
import * as Films from '../Actions/films.action';

class FilmsContainer extends Component {
    componentDidMount(){
        this.props.fetchFilms();
    }
    render() {
        return  (
            <div>
                <FilmsList films={this.props.films} />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        films: state.films
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchFilms: () => dispatch(Films.fetchFilms())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);