import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";

import hotelsReducer from "./hotels/reducer";
import filtersReducer from "./filters/reducer";

const reducers = combineReducers({
  hotels: hotelsReducer,
  filters: filtersReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

export default createStore(reducers, {}, middleware);
