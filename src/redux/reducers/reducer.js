import { TOKEN_FAILURE, TOKEN_SUCCESS } from '../actions';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case TOKEN_SUCCESS:
    return {
      ...state, token: action.payload,
    };
  case TOKEN_FAILURE:
    return {
      ...state, error: action.payload,
    };
  default:
    return state;
  }
};

export default reducer;
