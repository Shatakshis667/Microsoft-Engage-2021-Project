import {
  UPDATE_ATTEMPT_TEST_REQUEST,
  UPDATE_ATTEMPT_TEST_SUCCESS,
  UPDATE_ATTEMPT_TEST_FAILURE,
} from "../actions/attemptTestActions";

const initialState = {
  attemptedTime: 0,
  isFetching: false,
  isFetched: false,
  isFetchingError: false,
  initializeTimer: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_ATTEMPT_TEST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case UPDATE_ATTEMPT_TEST_SUCCESS:
      const checker = state.initializeTimer;
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        attemptedTime: action.time,
        initializeTimer: true,
      };
    case UPDATE_ATTEMPT_TEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetched: false,
        isFetchingError: true,
      };

    default:
      return state;
  }
}
