import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import Config from 'react-native-config';

type Response<T> = HttpClient.Response<T>;

export const buildClient = (config: AxiosRequestConfig) => {
  const client = axios.create(config);

  return client;
};

const defaultClient: AxiosInstance = buildClient({
  timeout: 30000,
});

defaultClient.interceptors.request.use(async config => {
  config.headers = {
    'x-rapidapi-host': Config.RAPID_HOST,
    'x-rapidapi-key': Config.RAPID_KEY,
  };

  return config;
});

defaultClient.interceptors.response.use(
  async response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 400) {
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export const get = async <T>({
  client = defaultClient,
  options = {},
  params = {},
  path,
  url,
}: HttpClient.GetParams): Promise<Response<T>> => {
  const response = await client.get(`${url}/${path}`, {
    ...options,
    params,
  });
  return response;
};

export const post = async <T>({
  client = defaultClient,
  options = {},
  params = {},
  path,
  url,
}: HttpClient.PostParams): Promise<Response<T>> => {
  const response = await client.post(`${url}/${path}`, params, options);
  return response;
};

export const put = async <T>({
  client = defaultClient,
  options = {},
  params = {},
  path,
  url,
}: HttpClient.PutParams): Promise<Response<T>> => {
  const response = await client.put(`${url}/${path}`, params, options);
  return response;
};

export const patch = async <T>({
  client = defaultClient,
  options = {},
  params = {},
  path,
  url,
}: HttpClient.PatchParams): Promise<Response<T>> => {
  const response = await client.patch(`${url}/${path}`, params, options);
  return response;
};

export const del = async <T>({
  client = defaultClient,
  options = {},
  params = {},
  path,
  url,
}: HttpClient.DelParams): Promise<Response<T>> => {
  const response = await client.delete(`${url}/${path}`, {
    params,
    ...options,
  });
  return response;
};
