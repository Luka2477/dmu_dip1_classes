const get = async (req, res) => {
  let testUser = {
    users: [
      {
        username: "luka2477",
        age: 22,
        created_at: new Date().toDateString(),
      },
      {
        username: "mike123123",
        age: 26,
        created_at: new Date().toDateString(),
      },
      {
        username: "esbena91239",
        age: 21,
        created_at: new Date().toDateString(),
      },
    ],
  };

  res.render("users", testUser);
};

export default { get };
