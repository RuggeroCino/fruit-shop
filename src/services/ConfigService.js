class ConfigService {
  getApiServer = () => {
    if (
      process.env.REACT_APP_FAKE_BACKEND === 'true' &&
      process.env.NODE_ENV === 'development'
    ) {
      return 'http://localhost:3000';
    }
    if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_API_SERVER_DEV;
    }
    if (process.env.NODE_ENV === 'production') {
      return process.env.REACT_APP_API_SERVER_PROD;
    }
  };
}

export const configService = new ConfigService();
