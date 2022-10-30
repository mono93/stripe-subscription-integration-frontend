import {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";
  
  const isAPIDown = (err: AxiosError) => {
    return !!err.isAxiosError && !err.response;
  }
  
  const onRequest = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    config = {
      ...config,
      baseURL: 'http://localhost:8080/api/',
      headers: {
        ...config.headers,
        ...{
          'x-project-at': 'authorization#123',
        },
      },
    };
    return config;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };
  
  const onResponse = (response: AxiosResponse) => {
    return response.data;
  };
  
  const onResponseError = (error: AxiosError): Promise<any> => {
    if (isAPIDown(error)) {
      return Promise.reject({ code: 503, message: "Service Unavailable" });
    } else if (error.code == '403') {
      return Promise.reject({ code: error.code, message: "Access Denied" });
    }
    return Promise.reject({ code: error.code, message: error.message });
  };
  
  export function setupInterceptorsTo(
    axiosInstance: AxiosInstance
  ): AxiosInstance {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
  }
  