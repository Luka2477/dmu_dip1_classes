const get = async (req, res) => {
  let testUser = {
    username: "luka2477",
    age: 22,
    created_at: new Date().toDateString(),
  };

  res.render("users", testUser);
};

export default { get };
