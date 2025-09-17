import api from "../../utils/api";

const ActionType = {
	RECEIVE_THREADS: "RECEIVE_THREADS",
	ADD_THREADS: "ADD_THREADS",
	SET_LOADING: "SET_LOADING",
};

function setLoading(isLoading) {
	return {
		type: ActionType.SET_LOADING,
		payload: {
			isLoading,
		},
	};
}

function receiveThreadsActionCreator(threads) {
	return {
		type: ActionType.RECEIVE_THREADS,
		payload: {
			threads,
		},
	};
}

function addThreadActionCreator(thread) {
	return {
		type: ActionType.ADD_THREADS,
		payload: {
			thread,
		},
	};
}

function asyncAddThread({ title, body, category }) {
	return async (dispatch) => {
		try {
			const thread = await api.createThread({ title, body, category });
			dispatch(addThreadActionCreator(thread));
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert("An unexpected error occurred.");
			}
		}
	};
}

function asyncReceiveThreads() {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const threads = await api.getAllThreads();
			dispatch(receiveThreadsActionCreator(threads));
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert("An unexpected error occurred.");
			}
		} finally {
			dispatch(setLoading(false));
		}
	};
}

export {
	ActionType,
	receiveThreadsActionCreator,
	asyncReceiveThreads,
	asyncAddThread,
	setLoading,
};
