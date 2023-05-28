
const initialState: IReportDataModelState = {
  loading: {
    get: {
      isLoading: undefined,
      isSucceeded: undefined,
    },
  },
  reportData: [],
};

export const reportDataModelReducer = (
  state = initialState,
  action: ReportDataActionTypes,
) => {
  switch (action.type) {
    case 'REPORT_DATA_GET_REQUEST': {
      return {
        ...state,
        loading: {
          ...state.loading,
          get: {
            isLoading: true,
            isSucceeded: undefined,
          },
        },
      };
    }

    case 'REPORT_DATA_GET_SUCCESS': {
      return {
        ...state,
        loading: {
          ...state.loading,
          get: {
            isLoading: false,
            isSucceeded: true,
          },
        },
        reportData: action.payload
      };
    }

    case 'REPORT_DATA_GET_FAILURE': {
      return {
        ...state,
        loading: {
          ...state.loading,
          get: {
            isLoading: false,
            isSucceeded: false,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
};
