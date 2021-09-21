import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import loading from "./sagas/loadingSaga";

import loadingSlice from "./reducers/loading";

/* Reducers */
const reducers = combineReducers({
  loading: loadingSlice.reducer
});

export type RootState = ReturnType<typeof reducers>
/* Sagas */
export const rootSagas = function* rootSagas(): any {
  return yield all([loading()]);
};


/* Store and middlewares configuration */
const sagaMiddleware = createSagaMiddleware({});

const middlewares: any = [];
middlewares.push(sagaMiddleware);

const Store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSagas);

export { Store };
