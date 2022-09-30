// opgave11.1.js
const userUrl1 = "https://jsonplaceholder.typicode.com/users";
const userUrl2 = "https://jsonplaceholder.typicode.com/users/11";

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

console.log("==============first");
get(userUrl1)
  .then(
    (response) => console.log(response),
    (err) => console.error(err)
  )
  .catch((err) => console.error(err));
console.log("==============first end");

console.log("===============second");
get(userUrl2)
  .then(
    (response) => console.log(response),
    (err) => console.error(err)
  )
  .catch((err) => console.error(err));
console.log("================second end");
