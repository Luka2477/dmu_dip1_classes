import { readdirSync } from "fs";

const get = async (req, res) => {
  let filenames = readdirSync(
    "/Users/lukasknudsen/Documents/dmu/dip1/dmu_dip1_classes/Day13_NodejsAndExpress/task1/src/files"
  );

  let html = "";
  for (let filename of filenames) {
    html +=
      '<a href="/api/v1/files/' + filename + '">' + filename + "</a><br>\n";
  }

  res.status(200).send(html);
};

const getOne = async (req, res) => {
  try {
    let path =
      "/Users/lukasknudsen/Documents/dmu/dip1/dmu_dip1_classes/Day13_NodejsAndExpress/task1/src/files/" +
      req.params.filename;
    res.status(200).sendFile(path);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

export default { get, getOne };
