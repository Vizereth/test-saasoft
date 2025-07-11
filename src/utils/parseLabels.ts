export const parseLabels = (labels: string) => {
  return labels
    .split(";")
    .map((item) => item.trim())
    .filter((item) => item)
    .map((item) => ({ text: item }));
};
