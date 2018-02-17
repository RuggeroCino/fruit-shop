class NetworkService {
  get = (url, headers = []) => {
    return new Promise((resolve, reject) => {
      let request = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          ...headers,
        },
      };

      fetch(url, request)
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  };

  post = (url, data, headers = []) => {
    return new Promise((resolve, reject) => {
      let request = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        body: JSON.stringify(data),
      };

      return fetch(url, request)
        .then(res => res.json())
        .then(json => resolve(json))
        .catch(error => reject(error));
    });
  };
}

export const networkService = new NetworkService();
