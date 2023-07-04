export const createReadableDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};
