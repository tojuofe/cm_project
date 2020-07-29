import { GET_STALL, GET_STALLS, CLEAR_STALL, STALL_ERROR } from './stall.types';

const initialState = {
  stallItems: [],
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STALL:
      return {
        ...state,
        stallItems: payload,
        loading: false,
      };
    case GET_STALLS:
      return {
        ...state,
        stallItems: payload,
        loading: false,
      };
    case CLEAR_STALL:
      return {
        ...state,
        stallItems: [],
        loading: false,
      };
    case STALL_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
