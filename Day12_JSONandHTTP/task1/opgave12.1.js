// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

const createTable = () => {
  return document.createElement("table");
};

const createTableRow = (table) => {
  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  return tableRow;
};

const createTableCell = (content) => {
  const tableCell = document.createElement("td");
  tableCell.innerHTML = content;
  return tableCell;
};

const fetchData = async () => {
  const response = await fetch(earthquakeUrl, {
    method: "GET",
    Accept: "application/json",
  });
  const json = await response.json();
  return json;
};

fetchData()
  .then((data) => {
    const table = createTable();

    // SORT
    data.features.sort((a, b) => b.properties.mag - a.properties.mag);

    for (let earthquake of data.features) {
      // EXCLUDE EARTHQUAKES WITH LESS THAN 5 MAG
      if (earthquake.properties.mag < 5) continue;

      const magnitude = createTableCell(earthquake.properties.mag);
      const time = createTableCell(
        new Date(earthquake.properties.time).toUTCString()
      );
      const place = createTableCell(earthquake.properties.place);
      const tableRow = createTableRow(table);
      tableRow.appendChild(magnitude);
      tableRow.appendChild(time);
      tableRow.appendChild(place);
    }

    document.body.appendChild(table);
  })
  .catch((error) => console.log(error));
