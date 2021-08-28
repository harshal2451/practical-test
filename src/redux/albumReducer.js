import {
  FETCH_ALBUMS_REQUEST,
  FETCH_SUCCESS_LIST,
  FETCH_SUCCESS_LIST_ITEM,
  FETCH_ERROR_LIST_ITEM,
  FETCH_ERROR_LIST,
} from "./albumTypes";

const initialState = {
  loading: false,
  list: [],
  listItems: [],
  error: "",
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS_LIST:
      return {
        ...state,
        loading: false,
        list: action.payload.list,
        error: "",
      };

    case FETCH_SUCCESS_LIST_ITEM:
      return {
        ...state,
        loading: false,
        listItems: action.payload.listItem,
        error: "",
      };

    case FETCH_ERROR_LIST:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload.error,
      };

    case FETCH_ERROR_LIST_ITEM:
      return {
        ...state,
        loading: false,
        listItem: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};
