import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SideBar } from './components/SideBar';
import {Table}  from './components/ReportTable';
import { reportDataGetRequestAction } from './store/models/reportData/actions';
import type { AppState } from './store';
import '../styles/tailwind.css'

const App: React.FC = () => {
  const dispatch = useDispatch();
  const reportGetLoadingState = useSelector((s: AppState) => s.models.reportData.loading.get);
  const reportData = useSelector((s: AppState) => s.models.reportData.reportData);
  const [isReportOpen, setIsReportOpen] =  React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    if (reportGetLoadingState.isSucceeded) {
      setIsReportOpen(true);
    }
  }, [reportData, reportGetLoadingState.isLoading, reportGetLoadingState.isSucceeded]);

  const closeReport = () => {
    setIsReportOpen(false);
  };

  return (
    <div className="App">
      <div className='flex flex-row'>
        <div className='basis-1/3 mx-6'>
          <SideBar
          text={'Generate Report'}
          disabled={reportGetLoadingState.isLoading}
          onClick={() => {
            dispatch(reportDataGetRequestAction())
          }}
          closeReport={closeReport}
          />

        </div>
        <div className='basis-1/2'>
          {isReportOpen && (
            <Table reportData={reportData} />
          )}
        </div>
    </div>
      </div>
  );
};

export default App;
