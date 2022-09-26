const compose1 = (f1, f2, x) => {
  return f1(f2(x));
};

console.log(
  compose1(
    (x) => x - 4,
    (x) => x + 2,
    6
  )
);

const compose2 = (f1, f2) => {
  return f1(f2(16));
};

console.log(
  compose2(
    (x) => x - 4,
    (x) => x + 20
  )
);

const compose3 = (fs) => {
  let lastf;
  for (let i = fs.length - 1; i >= 0; i--) {
    if (!lastf) lastf = fs[i]();
    else lastf = fs[i](lastf);
  }
  return lastf;
};

console.log(compose3([(x) => x + 2, (x) => x + 4, (x) => x + 8, () => 16]));

const compose3other = (...fs) => {
  let lastf;
  for (let i = fs.length - 1; i >= 0; i--) {
    if (!lastf) lastf = fs[i]();
    else lastf = fs[i](lastf);
  }
  return lastf;
};

console.log(
  compose3other(
    (x) => x + 2,
    (x) => x + 4,
    (x) => x + 8,
    () => 16
  )
);
