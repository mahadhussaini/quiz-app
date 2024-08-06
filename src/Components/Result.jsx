import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Result() {
  const { correct, setExit, setStart, quizzes } = useContext(QuizContext);

  const playAgain = () => {
    setExit(false);
    setStart(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
        <p className="text-lg mb-4">
          You scored {correct} out of {quizzes.length}
        </p>
        <button
          onClick={playAgain}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
