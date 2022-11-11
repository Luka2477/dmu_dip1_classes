const get = async (req, res) => {
  const getUsers = async () => {
    const res = await fetch("https://randomuser.me/api/?results=100");

    if (!res.ok) {
      console.log(res.status, res.statusText);
      return;
    }

    const json = await res.json();
    return json;
  };

  const users = await getUsers();
  res.render("users", users);
};

export default { get };
