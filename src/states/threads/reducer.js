import { ActionType } from "./action";

const initialState = {
	data: [],
	isLoading: true,
};

function threadsReducer(state = initialState, action) {
	switch (action.type) {
		case ActionType.RECEIVE_THREADS:
			return {
				...state,
				data: action.payload.threads,
			};

		case ActionType.SET_LOADING:
			return {
				...state,
				isLoading: action.payload.isLoading,
			};

		default:
			return state;
	}
}

export default threadsReducer;
