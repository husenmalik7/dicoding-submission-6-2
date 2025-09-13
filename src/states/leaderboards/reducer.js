import { ActionType } from './action';

const initialState = {
  data: [],
  isLoading: true,
};

function leaderboardsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return {
        ...state,
        data: action.payload.leaderboards,
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

export default leaderboardsReducer;
