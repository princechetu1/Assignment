import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import PlanetList from '../Components/PlanetsList';
import * as Planets from '../Actions/planet.action';

class PlanetsContainer extends Component {
    componentDidMount(){
        this.props.fetchPlanets();
    }
    render() {
        return  (
            <div>
                <PlanetList planets={this.props.palnets} />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        palnets: state.planets
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchPlanets: () => dispatch(Planets.fetchPlanets())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsContainer);