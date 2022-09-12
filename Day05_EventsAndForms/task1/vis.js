const handleOnClick = () => {
  talInput.value = Math.round(Math.random() * 1000);
  tidInput.value = new Date().toLocaleTimeString();
};

let talInput = document.querySelector("#tal");
let tidInput = document.querySelector("#tid");

talInput.outerHTML = `<label id="tal-label">Tal: ${talInput.outerHTML}</label>`;
tidInput.outerHTML = `<label id="tid-label">Tid: ${tidInput.outerHTML}</label>`;

const elems = document.querySelectorAll("label, input");
talInput = document.querySelector("#tal");
tidInput = document.querySelector("#tid");

for (let elem of elems) {
  elem.onclick = handleOnClick;
}
