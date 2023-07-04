export const debounce = (fn, delay) => {
  let timeoutId;

  const debouncedFn = (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };

  debouncedFn.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFn;
};
