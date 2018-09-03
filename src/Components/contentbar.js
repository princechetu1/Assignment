import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import { changeModel } from '../actions/index';
import ModelContainer from './ModelContainer';

class ContentBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            {Object.keys(this.props.models).map((cat) => 
                    this.props.models[cat].map((models,k) =>
                            <ModelContainer key={k} index={k} items={models} />
                    )
            )}
                <Button color="secondary" onClick={(evt) => { evt.target.setAttribute("style","visibility:hidden"); this.props.changeModel()}} className="col-md-offset-3 center-block">LoadMore....</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        models: state.models
    };
}
function mapDispatchToProps(dispatch) {
    // whenever selectbook is called the result should be passed to all of our reducers
    return bindActionCreators({ changeModel: changeModel }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentBar);