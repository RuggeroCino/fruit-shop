class ConfigService {
  getApiServer = () => {
    if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_API_SERVER_DEV;
    } else {
      return process.env.REACT_APP_API_SERVER_PROD;
    }
  };
}

export const configService = new ConfigService();
