import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  reportDataGetSuccessAction,
  reportDataGetFailureAction,
  resetReportDataLoadingStateAction,
} from './actions';

import getDataApi from '../../../api/getData';

function* get(action: IReportDataGetRequestAction) {
  try {

    const reportData: IReportData[] = yield call(getDataApi);
    yield put(reportDataGetSuccessAction(reportData));
  } catch (err) {
    yield put(reportDataGetFailureAction());
  }

  yield put(resetReportDataLoadingStateAction({ loadingType: 'get' }));
}

export const rootSaga = [
  function* watchReportDataGetRequest() {
    yield takeLatest('REPORT_DATA_GET_REQUEST', get);
  }(),
];
