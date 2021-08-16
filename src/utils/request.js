export const createRequest = (baseURL = '') => {
  return (url, method, data) => new Promise((resolve, reject) => {
    fetch(baseURL + url, {
      body: JSON.stringify(data), // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: method, // *GET, POST, PUT, DELETE, etc.
    }).then(response => {
      resolve(response.json())
    }).catch((error) => {
      reject(error)
    });
  })
};

export const request = createRequest('/api');
