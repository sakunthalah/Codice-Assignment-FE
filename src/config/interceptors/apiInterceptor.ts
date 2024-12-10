
import axios, { AxiosInstance } from 'axios';

export class ApiInterceptor {
  public axios: AxiosInstance = axios.create();
  private static instance: ApiInterceptor;
  private getAccessToken: (() => Promise<string | null>) | null = null;

  private constructor() {
    this.initRequest();
  }

  public static getInstance(): ApiInterceptor {
    if (!ApiInterceptor.instance) {
      ApiInterceptor.instance = new ApiInterceptor();
    }
    return ApiInterceptor.instance;
  }

  public setTokenRetrieval(getAccessToken: () => Promise<string | null>) {
    this.getAccessToken = getAccessToken;
  }

  private initRequest() {
    this.axios.interceptors.request.use(
      async (config) => {
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
        return config;
      },
      (error) => {
        return Promise.reject(new Error(error));
      },
    );
  }
}
