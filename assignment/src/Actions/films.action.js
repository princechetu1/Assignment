import * as apiServices from '../Helpers/axiosHelper';
import * as actionTypes from '../Constants/actionType';
const DEFAULT_URL = `${actionTypes.API_SERVER}/resource/skills`;

export const skillsFetchStart = () => {
	return {
		type: actionTypes.SKILLS_STARTS
	};
};

export const skillsFetchSuccess = (data) => {
	return {
		type: actionTypes.SKILLS_SUCCESS,
		payload: data.data
	};
};

export const skillsFetchFailure = (msg) => {
	return {
		type: actionTypes.SKILLS_FAILURE,
		payload: msg
	};
};

export const fetchSkills = (token) => {
	return (dispatch) => {
		dispatch(skillsFetchStart());

		apiServices.getRequest(token, DEFAULT_URL)
			.then(function (response) {
				dispatch(skillsFetchSuccess(response));
			})
			.catch(function (error) {
				dispatch(skillsFetchFailure(error));
			});
	};
};
