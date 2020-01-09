import { GET_USERS } from "../actions/index";

export default function(state = [], action = {}) {
  switch (action.type) {
    case GET_USERS:
      console.log("users data: ", action.payload);
      return [...action.payload];

    default:
      return state;
  }
}
