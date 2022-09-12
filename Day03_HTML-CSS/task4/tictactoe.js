const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const margin = 20;
const board = [];
let turn = "X";

const resizeCanvas = () => {
  const min = Math.min(window.innerWidth, window.innerHeight);

  canvas.width = min;
  canvas.height = min;
};

const createBoard = () => {
  for (let row = 0; row < 3; row++) {
    board[row] = [];

    for (let col = 0; col < 3; col++) {
      board[row][col] = {
        data: null,
      };
    }
  }

  resizeBoard();
};

const resizeBoard = () => {
  const width = (canvas.width - margin * 2) / 3;
  const height = (canvas.height - margin * 2) / 3;

  for (let row in board) {
    for (let col in board[row]) {
      board[row][col].x = margin + col * width;
      board[row][col].y = margin + row * height;
      board[row][col].width = width;
      board[row][col].height = height;
    }
  }
};

const drawBoard = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = `small-caps ${canvas.width / 5}px Arial`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "black";
  context.strokeStyle = "black";

  for (let row of board) {
    for (let cell of row) {
      context.strokeRect(cell.x, cell.y, cell.width, cell.height);
      context.fillText(
        cell.data || "",
        cell.x + cell.width / 2,
        cell.y + cell.height / 2
      );
    }
  }
};

const cellPressed = (cell) => {
  if (cell.data) {
    return;
  }

  cell.data = turn;
  turn = turn === "X" ? "O" : "X";

  drawBoard();
};

const onPress = ({ pageX, pageY }) => {
  for (let row of board) {
    for (let cell of row) {
      if (
        pageX >= cell.x &&
        pageX < cell.x + cell.width &&
        pageY >= cell.y &&
        pageY < cell.y + cell.height
      ) {
        return cellPressed(cell);
      }
    }
  }
};

window.addEventListener("resize", () => {
  resizeCanvas();
  resizeBoard();
  drawBoard();
});

canvas.addEventListener("click", onPress);

resizeCanvas();
createBoard();
drawBoard();
