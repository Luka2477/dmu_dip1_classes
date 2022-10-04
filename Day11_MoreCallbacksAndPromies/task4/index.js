const randomPromise = async () => {
  const response = await fetch(
    "https://www.random.org/integers/?num=10&min=1&max=10&col=1&base=10&format=plain&rnd=new",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
    }
  );
  const text = await response.text();
  const nums = text
    .split("\n")
    .map((el) => parseInt(el))
    .filter((num) => !isNaN(num));

  for (let num of nums) {
    if (num < 7) {
      return Promise.resolve(num);
    } else if (num < 10) {
      return Promise.reject(num);
    } else {
      return Promise.reject(num);
    }
  }
};

const promises = [];
promises.push(randomPromise());
promises.push(randomPromise());
promises.push(randomPromise());
promises.push(randomPromise());

Promise.all(promises)
  .then(() => console.log("Success!"))
  .catch((error) => console.log("Problem!!!", error));

Promise.any(promises)
  .then(() => console.log("Success!"))
  .catch((error) => console.log("Problem!!!", error));

Promise.allSettled(promises)
  .then((results) => results.forEach((result) => console.log(result.status)))
  .catch((error) => console.log("Problem!!!", error));
