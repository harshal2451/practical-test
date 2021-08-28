import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from 'redux-logger'
import { albumReducer } from "./albumReducer";
// import { composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(albumReducer, applyMiddleware(thunk));

export default store;
