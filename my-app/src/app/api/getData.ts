import axios, { AxiosResponse }  from 'axios';

type IGenericObject = Record<string, any>;
interface IErrorResponse {
  response?: {
    data: {
      message: string;
    };
    headers: IGenericObject;
    status: number;
    statusText: string;
  };
  message: string;
}
const get = async (): Promise<IGenericObject> =>  {
  try {
    const response: AxiosResponse = await axios.get('/api/generateReport');

    return Promise.resolve(response.data as IReportData[]);
  } catch (error) {
    const _error = error as IErrorResponse;

    return Promise.reject(_error);
  }
};
export default get;
