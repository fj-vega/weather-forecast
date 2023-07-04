export const groupByDay = (array) => {
  const result = [];

  array.forEach((item) => {
    const timestamp = item.dt * 1000;
    const date = new Date(timestamp);
    const day = date.getDate();

    const existingGroup = result.find((group) => group.day === day);

    if (existingGroup) {
      existingGroup.list.push(item);
    } else {
      result.push({ dt: item.dt, day, list: [item] });
    }
  });

  return result;
};
