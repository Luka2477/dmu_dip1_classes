const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const num = Math.round(Math.random() * 10);
    console.log(num);

    if (num < 7) {
      resolve();
    } else if (num < 10) {
      reject(num);
    } else {
      throw new Error(num);
    }
  });
};

const promises = [];
promises.push(randomPromise());
promises.push(randomPromise());
promises.push(randomPromise());
promises.push(randomPromise());

Promise.all(promises)
  .then(() => console.log("Success!"))
  .catch((error) => console.log("ERROR!!!", error.message));

Promise.any(promises)
  .then(() => console.log("Success!"))
  .catch((error) => console.log("ERROR!!!", error.message));

Promise.allSettled(promises)
  .then((results) => results.forEach((result) => console.log(result.status)))
  .catch((error) => console.log("ERROR!!!", error.message));
