export const GET_USERS = "GET_USERS";

function Users(payload) {
  return {
    type: GET_USERS,
    payload: payload
  };
}

export const getUsers = () => (dispatch, getState) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      const action = Users(data);

      dispatch(action);
    })
    .catch(error => {
      console.error(error);
    });
};
