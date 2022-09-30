// opgave11.2.js
const userUrl = "https://jsonplaceholder.typicode.com/users";
const postUrl = "https://jsonplaceholder.typicode.com/posts?userId=";

let postsTable = null;

async function get(url) {
  const respons = await fetch(url);
  if (respons.status !== 200)
    // OK
    throw new Error(respons.status);
  return await respons.json();
}

const initUsersTable = () => {
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  const tableTitle = document.createElement("th");
  tableTitle.colSpan = 5;
  tableTitle.innerHTML = "Users";
  tableHeader.appendChild(tableTitle);
  table.appendChild(tableHeader);
  document.body.appendChild(table);
  return table;
};

const appendUsersToTable = (table, users) => {
  let tableRow;
  for (let i = 0; i < users.length; i++) {
    if (i % 5 === 0) {
      tableRow = document.createElement("tr");
      table.appendChild(tableRow);
    }

    let tableCell = document.createElement("td");
    tableCell.innerHTML = users[i].name;
    tableCell.onclick = () => showPosts(users[i].id);
    tableRow.appendChild(tableCell);
  }
};

const initPostsTable = () => {
  const table = document.createElement("table");
  const tableHeader = document.createElement("tr");
  const tableTitle = document.createElement("th");
  tableTitle.colSpan = 2;
  tableTitle.innerHTML = "Posts";
  tableHeader.appendChild(tableTitle);
  table.appendChild(tableHeader);
  document.body.appendChild(table);
  return table;
};

const showPosts = (id) => {
  get(postUrl + id)
    .then((posts) => {
      if (postsTable !== null) document.body.removeChild(postsTable);
      postsTable = initPostsTable();
      appendPostsToTable(postsTable, posts);
    })
    .catch((err) => console.log(err));
};

const appendPostsToTable = (table, posts) => {
  let tableRow;
  for (let i = 0; i < posts.length; i++) {
    if (i % 2 === 0) {
      tableRow = document.createElement("tr");
      table.appendChild(tableRow);
    }

    let tableCell = document.createElement("td");
    tableCell.innerHTML = `<h3>${posts[i].title}</h3><p>${posts[i].body}</p>`;
    tableRow.appendChild(tableCell);
  }
};

const usersTable = initUsersTable();

get(userUrl)
  .then((users) => {
    appendUsersToTable(usersTable, users);
  })
  .catch((err) => console.log(err));
