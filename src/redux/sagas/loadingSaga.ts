import { all, put, takeLatest, delay } from "redux-saga/effects";
import loadingSlice from "../reducers/loading";

async function* execute() {
  try {
    console.log('start')
    yield delay(2000)
    yield put(loadingSlice.actions.finish({ loading: false }))
  } catch (e) {
    console.log(e)
  }
}

export default function* root(): any {
  yield all([
    yield takeLatest(loadingSlice.actions.execute, execute)
  ]);
}