const useNameConverter = (name) => {
  const arr = name.split("-");
  return arr
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join("");
};

module.exports = useNameConverter;
