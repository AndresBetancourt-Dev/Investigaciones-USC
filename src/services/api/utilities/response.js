export const handleResponse = (response) => {
  if (response.results) {
    return response.results;
  }

  if (response.data) {
    return response.data;
  }

  return response;
};

export const handleError = (error) => {
  if (error.data) {
    return error.data;
  }
  return error;
};
