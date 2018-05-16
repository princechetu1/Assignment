import { combineReducers } from 'redux';
import ModelReducers from './reducers_models';

const rootReducers = combineReducers({
    models: ModelReducers
});

export default rootReducers;