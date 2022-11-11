import { request, response } from "express";

const get = async (req, res) => {
  let fetchRes = undefined;
  try {
    fetchRes = await fetch("https://jsonplaceholder.typicode.com/users");
  } catch (e) {
    res.status(404).send(e.message);
  }

  const users = await fetchRes.json();

  let html = "<table>";
  for (let user of users) {
    html += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.company.name}</td></tr>\n`;
  }
  html += "</table>";

  res.status(200).send(html);
};

export default { get };
