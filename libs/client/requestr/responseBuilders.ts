const errorCode = (response: Response) => {
  if (response.ok) return response;
  throw new Error(response.statusText);
};

const jsonResponse = (response: Response) => response.json();

export { errorCode, jsonResponse };
