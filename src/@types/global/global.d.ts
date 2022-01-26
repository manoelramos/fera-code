import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Navigation.RootStackParamList {}
  }

  namespace ExternalModules {
    namespace Axios {
      export type {AxiosInstance, AxiosRequestConfig, AxiosResponse};
    }
  }
}
