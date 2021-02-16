import axios from 'axios';
// import { store } from '../redux/store';
// import { logoutAction } from '../redux/Auth/actions';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 30000,
});

const AxiosRequestInterceptor = async (config: any) => ({
  ...config,
  header: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${store.getState().auth.token}`,
    ...config.headers,
  }
});

export const handleError = (response: Response & { data: any }) => {
  if (response && response.status === 401) {
    // store.dispatch(logoutAction());
    return {
      status: response.status,
      error: 'unauthorized',
    };
  } else if (response && response.status === 404) {
    if (window.navigator.onLine) {
      return {
        status: response.status,
        error: 'notFound',
      };
    } else {
      return {
        status: response.status,
        error: 'offline',
      };
    }
  } else if (response && response.status >= 500) {
    return {
      status: response.status,
      error: 'internalServerError',
    };
  } else if (!response) {
    return {
      status: 'xxx',
      error: 'unexpectedError',
    };
  } else {
    return {
      status: response.status,
      error: response.data.message,
    };
  }
};

instance.interceptors.request.use(AxiosRequestInterceptor);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const response = handleError(error.response);

    return Promise.reject(response);
  }
);

export default instance;