const compareSort = (compare) => {
  if (typeof compare !== "function")
    throw new Error("compare must be a function");
  return (x) => {
    if (!Array.isArray(x)) throw new Error("x must be an array");
    if (!x.every((el) => typeof el === "string"))
      throw new Error("elements of x must be string");
    return x.sort(compare);
  };
};

const strings = ["Lukas", 2, "oliver", "mike"];
console.log(compareSort((a, b) => (a === b ? 0 : a < b ? -1 : 1))(strings));
