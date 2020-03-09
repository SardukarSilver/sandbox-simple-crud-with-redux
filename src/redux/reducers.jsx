const initialState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      grade: 1,
      school: 'MIT',
    },
    {
      id: 2,
      name: 'Niel Tyson',
      grade: 2,
      school: 'NASA University',
    },
    {
      id: 3,
      name: 'Terry Adams',
      grade: 3,
      school: 'Hogvarts',
    },
    {
      id: 4,
      name: 'Jenny Smith',
      grade: 4,
      school: 'Sakuraso Art School',
    },
  ],
};

const allReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newBlankUser = action.payload;
      return {
        users: [...state.users, newBlankUser],
      };
    }

    case 'DELETE_USER': {
      const filteredUserList = state.users.filter(x => x.id !== action.payload);
      return { ...state, users: filteredUserList };
    }

    case 'UPDATE_USER': {
      console.log('payload', action.payload);
      const upadtedList = state.users.map(user => {
        const { id, name, grade, school } = action.payload;
        if (user.id === id) {
          user.name = name;
          user.grade = grade;
          user.school = school;
        }
        return user;
      });
      return { users: upadtedList };
    }

    default:
      return state;
  }
};

export default allReducers;
