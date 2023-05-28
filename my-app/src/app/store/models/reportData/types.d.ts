type REPORT_DATA_GET_REQUEST = 'REPORT_DATA_GET_REQUEST';
type REPORT_DATA_GET_SUCCESS = 'REPORT_DATA_GET_SUCCESS';
type REPORT_DATA_GET_FAILURE = 'REPORT_DATA_GET_FAILURE';

type RESET_REPORT_DATA_LOADING_STATE = 'RESET_REPORT_DATA_LOADING_STATE';

interface ILoading {
  isLoading?: boolean;
  isSucceeded?: boolean;
}

interface IReportDataModelState {
  loading: {
    get: ILoading;
  };
  reportData: IReportData[];
}

interface IReportData {
  id: number,
  title: string;
  thumbnail: string;
  url: string;
  totalEngagementTime: number;
}

interface IReportDataGetRequestAction {
  type: REPORT_DATA_GET_REQUEST;
}

interface IReportDataGetSuccessAction {
  payload: IReportData[];
  type: REPORT_DATA_GET_SUCCESS;
}

interface IReportDataGetFailureAction {
  type: REPORT_DATA_GET_FAILURE;
}

interface IResetReportDataLoadingStateAction {
  payload: {
    loadingType: 'get';
  };
  type: RESET_REPORT_DATA_LOADING_STATE;
}

type ReportDataActionTypes = (
  IResetReportDataLoadingStateAction |
  IReportDataGetFailureAction |
  IReportDataGetRequestAction |
  IReportDataGetSuccessAction
);
