export const reportDataGetRequestAction = (
): IReportDataGetRequestAction => ({
  type: 'REPORT_DATA_GET_REQUEST',
});

export const reportDataGetSuccessAction = (
  payload: IReportData[],
): IReportDataGetSuccessAction => ({
  payload,
  type: 'REPORT_DATA_GET_SUCCESS',
});

export const reportDataGetFailureAction = (): IReportDataGetFailureAction => ({
  type: 'REPORT_DATA_GET_FAILURE',
});

export const resetReportDataLoadingStateAction = (
  payload: {
	  loadingType: 'get';
  },
): IResetReportDataLoadingStateAction => ({
  payload,
  type: 'RESET_REPORT_DATA_LOADING_STATE',
});
