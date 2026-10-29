import { useState } from "react";
import "./App.css";
type Cell = "X" | "O" | null;
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board: Cell[]) {
  for (const [a, b, c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function App() {
  const [activePlayer, setActivePlayer] = useState<"X" | "O">("X");
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);
  function handleCellClick(index: number) {
    if (board[index] !== null || winner) return;

    const nextBoard: Cell[] = board.map((cell, cellIndex) =>
      cellIndex === index ? activePlayer : cell,
    );

    setBoard(nextBoard);
    if (!checkWinner(nextBoard) && nextBoard.some((cell) => cell === null)) {
      setActivePlayer(activePlayer === "X" ? "O" : "X");
    }
  }
  function restartGame() {
    setBoard(Array(9).fill(null));
    setActivePlayer("X");
  }
  return (
    <div className="app">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {winner
          ? "Wygrana " + winner
          : isDraw
            ? "Remis"
            : "Ruch " + activePlayer}
      </p>
      <div className="board">
        {board.map((cell, index) => (
          <div
            className="cell"
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {cell}
          </div>
        ))}
      </div>
      <button onClick={restartGame} className="restartButton">
        Zrestartuj grę
      </button>
    </div>
  );
}

export default App;
