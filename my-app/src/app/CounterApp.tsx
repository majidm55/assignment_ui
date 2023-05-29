import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './components/Button';
import {Table}  from './components/ReportTable';
import { reportDataGetRequestAction } from './store/models/reportData/actions';
import type { AppState } from './store';
import './App.css';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const reportGetLoadingState = useSelector((s: AppState) => s.models.reportData.loading.get);
  const reportData = useSelector((s: AppState) => s.models.reportData.reportData);
  const [report, setReport] =  React.useState<IReportData[] | []>([]);

  React.useEffect(() => {
    if (reportGetLoadingState.isSucceeded) {
      setReport(reportData);

    }

  }, [reportGetLoadingState.isLoading])

  return (
    <div className="App">
      {report.length > 0 && (
        <div>
          {/* <ul>
            {report.map((r: IReportData) => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul> */}
        <Table reportData={reportData} />
        </div>
      )}

      <header className="App-header">
        <Button
          text={"CLICK ME"}
          isLoading={reportGetLoadingState.isLoading}
          onClick={() => {
            dispatch(reportDataGetRequestAction());
          }}
        />
      </header>
    </div>
  );
}

export default App;
