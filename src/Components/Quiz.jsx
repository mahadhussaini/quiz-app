import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Box current={current} setCurrent={setCurrent} next={setCurrent} />
    </div>
  );
}

const Box = ({ current, setCurrent, next }) => {
  const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if (quizzes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      next(current + 1);
    }
  };

  const resetHandler = () => {
    setCurrent(0);
    setAns("");
    setCorrect(0);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      <p className="text-lg mb-4">Question {current + 1}</p>
      <div className="text-xl mb-4">{quizzes[current].question}</div>

      <div className="grid grid-cols-2 gap-4">
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm ${
            ans === "a" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setAns("a")}
        >
          {quizzes[current].a}
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm ${
            ans === "b" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setAns("b")}
        >
          {quizzes[current].b}
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm ${
            ans === "c" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setAns("c")}
        >
          {quizzes[current].c}
        </button>
        <button
          className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-200 rounded shadow-sm ${
            ans === "d" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setAns("d")}
        >
          {quizzes[current].d}
        </button>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={saveHandler}
        >
          Save & Next
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setExit(true)}
        >
          Exit
        </button>
      </div>
    </div>
  );
};
