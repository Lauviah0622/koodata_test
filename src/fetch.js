export default function clientFactory(baseUrl, headers = {}) {
  return function client(endpoint, { body, ...customConfig } = {}) {
    const config = {
      method: body ? "POST" : "GET",
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    };
    if (body) {
      config.body = JSON.stringify(body);
    }
    return window
      .fetch(`${baseUrl}${endpoint}`, config)
      .then(async (response) => {
        if (response.ok) {
          const json = await response.json();
          return json;
        } else {
          const errorMessage = await response.text();
          return Promise.reject(new Error(errorMessage));
        }
      });
  };
}

export const rapidAPIAuthHeader = {
  "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
  "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
  useQueryString: true,
};
