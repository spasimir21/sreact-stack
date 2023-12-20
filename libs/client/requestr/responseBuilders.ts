const errorCode = (response: Response) => {
  if (response.ok) return response;
  throw new Error(response.statusText);
};

const jsonResponse = (response: Response) => response.json();

const mockError = (message: string) => () => {
  throw new Error(message);
};

export { errorCode, jsonResponse, mockError };
