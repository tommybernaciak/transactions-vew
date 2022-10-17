import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API;

interface IRequest {
  url: string;
}

interface IGetRequestPayload extends IRequest {
  params?: Record<string, string | number | undefined | boolean>;
}

/**
 * GET request to API
 */
export const getRequest = async <ReturnDataType>({
  url,
  params
}: IGetRequestPayload): Promise<AxiosResponse<ReturnDataType>> => {
  return await axios.request({ url, method: 'GET', params });
};
