import { ActionType } from './action';

function usersReducer(users = {}, action) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS: {
      const usersArray = action.payload.users;
      const usersById = usersArray.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      return usersById;
    }

    default:
      return users;
  }
}

export default usersReducer;
