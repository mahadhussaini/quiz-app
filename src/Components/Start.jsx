import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizHolder";

export default function Start() {
  const { setStart } = useContext(QuizContext);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <button
        onClick={() => setStart(true)}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full shadow-md transition duration-200"
      >
        Start Quiz
      </button>
    </div>
  );
}
