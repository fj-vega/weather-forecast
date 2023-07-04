export const withCaching = (fn) => {
  const cache = {};

  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = await fn(...args);
    cache[key] = result;
    return result;
  };
};
