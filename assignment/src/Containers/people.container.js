import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Style/style.css';
import PeopleList from '../Components/PeopleList';
import * as People from '../Actions/people.action';

class PeoplesContainer extends Component {
    componentDidMount(){
        this.props.fetchPeople();
    }
    render() {
        return  (
            <div>
                <PeopleList peoples={this.props.people}
                    scrollFetch={this.props.scrollFetchPeoples}
                    serachFetch={this.props.searchFetch}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
        people: state.peoples
	};
}

function mapDispatchToProps(dispatch) {
	return {
        fetchPeople: () => dispatch(People.fetchPeoples()),
        scrollFetchPeoples: (url) => dispatch(People.scrollFetchPeoples(url)),
        searchFetch: (val) => dispatch(People.searchFetchPeoples(val))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PeoplesContainer);