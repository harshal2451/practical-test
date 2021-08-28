import {
  FETCH_ALBUMS_REQUEST,
  FETCH_SUCCESS_LIST,
  FETCH_SUCCESS_LIST_ITEM,
  FETCH_ERROR_LIST,
  FETCH_ERROR_LIST_ITEM,
} from "./albumTypes";
import axios from "axios";

export function fetchAuthorsRequest() {
  return {
    type: FETCH_ALBUMS_REQUEST,
  };
}

export function fetchSuccessList(list) {
  return {
    type: FETCH_SUCCESS_LIST,
    payload: {
      list,
    },
  };
}

export function fetchSuccessListItem(listItem) {
  return {
    type: FETCH_SUCCESS_LIST_ITEM,
    payload: {
      listItem,
    },
  };
}

export function fetchErrorListItem(error) {
  return {
    type: FETCH_ERROR_LIST_ITEM,
    payload: {
      error,
    },
  };
}

export function fetchErrorList(error) {
  return {
    type: FETCH_ERROR_LIST,
    payload: {
      error,
    },
  };
}

export function fetchList() {
  return (dispatch) => {
    dispatch(fetchAuthorsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const list = response.data;
        console.log("list API", list);
        dispatch(fetchSuccessList(list));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchErrorList(errorMsg));
      });
  };
}

export function fetchListItem() {
  return (dispatch) => {
    dispatch(fetchAuthorsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        const list = response.data;

        console.log("listItem API", list);
        dispatch(fetchSuccessListItem(list));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchErrorListItem(errorMsg));
      });
  };
}

// export function deleteAuthor(removeAuthorId) {
//   console.log(removeAuthorId);
//   return {
//     type: DELETE_AUTHOR,
//     id: removeAuthorId,
//   };
// }
