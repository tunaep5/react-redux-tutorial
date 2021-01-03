// action types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// actions
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// reducers
const initialState = {
  number: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };

    case DECREASE:
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
};

export default counter;
