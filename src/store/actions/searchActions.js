import SearchService from '../../services/searchService';

export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const GET_SEARCH_RESULT_SUCCESS = 'GET_SEARCH_RESULT_SUCCESS';
export const GET_SEARCH_RESULT_ERROR = 'GET_SEARCH_RESULT_ERROR';

export const getSearchResult =
  ({ value = 'react', page = 1 }) =>
  async (dispatch) => {
    dispatch({ type: GET_SEARCH_RESULT });
    try {
      const result = await SearchService.getSearchRequest(value || 'react', page);
      await dispatch({
        type: GET_SEARCH_RESULT_SUCCESS,
        payload: { items: result.data.items, count: result.data.total_count }
      });
    } catch (e) {
      dispatch({ type: GET_SEARCH_RESULT_ERROR, payload: e });
      throw e;
    }
  };
