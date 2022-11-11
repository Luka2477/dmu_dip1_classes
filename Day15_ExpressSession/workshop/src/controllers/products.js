const get = async (req, res) => {
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10");

    if (!res.ok) {
      console.error(res.status, res.statusText);
      return;
    }

    const json = await res.json();
    return json;
  };

  const products = await getProducts();
  if (!req.session.ids) req.session.ids = [];

  res.status(200).render("products", {
    products: products.products,
    ids: req.session.ids,
  });
};

const buy = async (req, res) => {
  const { id } = req.params;

  if (!req.session.ids.includes(id)) req.session.ids.push(id);

  res.status(201).send();
};

export default { get, buy };
