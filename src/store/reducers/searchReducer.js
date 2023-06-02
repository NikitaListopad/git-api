import {
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_ERROR,
  GET_SEARCH_RESULT_SUCCESS
} from '../actions/searchActions';

const initialState = {
  loading: false,
  error: null,
  items: [],
  totalCount: 1
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        loading: true
      };
    case GET_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.items,
        totalCount: action.payload.count
      };
    case GET_SEARCH_RESULT_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
