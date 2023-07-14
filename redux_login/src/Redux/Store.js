import { createStore } from "redux";

import loginReducer from "./Reducer";

const store = createStore(loginReducer);

export default store;
