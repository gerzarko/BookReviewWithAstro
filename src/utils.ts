const newDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-Uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export { newDate };
