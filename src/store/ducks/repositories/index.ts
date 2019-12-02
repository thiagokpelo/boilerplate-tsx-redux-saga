import { Reducer } from 'redux';
import { RepositoriesTypes, RepositoriesState } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };

    case RepositoriesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
