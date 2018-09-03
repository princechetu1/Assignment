import { combineReducers } from 'redux';
import ModelReducers from './films.reducer';

const rootReducers = combineReducers({
    models: ModelReducers
});

export default rootReducers;