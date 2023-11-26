const combine =
  (...builders: ((...args: any[]) => any)[]) =>
  async (requestOrResponse: any, params?: any) => {
    for (const builder of builders) requestOrResponse = await builder(requestOrResponse, params);
    return requestOrResponse;
  };

export { combine };
