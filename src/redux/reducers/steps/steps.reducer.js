import * as types from './steps.actionTypes';

const initialState = {
  step: 0,
};

const setSteps = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STEP:
      return {
        step: action.step,
      };
    default:
      return state;
  }
};
export default setSteps;
