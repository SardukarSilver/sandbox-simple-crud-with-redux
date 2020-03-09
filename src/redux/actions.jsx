export const addNewUser = data => ({
  type: 'ADD_USER',
  payload: data,
});
export const deleteUser = index => ({
  type: 'DELETE_USER',
  payload: index,
});
export const updateUser = (id, name, grade, school) => ({
  type: 'UPDATE_USER',
  payload: {
    id,
    name,
    grade,
    school,
  },
});
