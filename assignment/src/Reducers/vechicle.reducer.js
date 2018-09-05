import * as actionTypes from '../Constants/actionType';
const initialState = {
	isStarted: false,
	isError: false,
    data: [],
    next:'',
	errorMsg: ''
};

export default function (state = initialState, action) {
	switch (action.type) {
	case actionTypes.VECHICLES_STARTS:
		return { ...state, isStarted: true };
	case actionTypes.VECHICLES_SUCCESS:
		return { ...state, isError: false, isStarted: false,
						 next:action.payload, data: action.payload.results };
	case actionTypes.VECHICLES_FAILURE:
		return { ...state, isStarted: false, isError: true,
						 errorMsg: action.payload };
	default:
		return state;
	}
}
