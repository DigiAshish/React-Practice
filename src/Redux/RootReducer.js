const initialState = {
  user: ["Ashish", "Niki", "Harman"]
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state, action.payload]
      };
    default:
      return state;
  }
};

export default RootReducer;
