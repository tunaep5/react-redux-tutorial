import { createAction, handleActions } from 'redux-actions';

// action types
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// actions
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducers
const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
