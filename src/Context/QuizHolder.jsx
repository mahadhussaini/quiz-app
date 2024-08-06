import React, { useState } from "react";
import { createContext } from "react";

// @ts-ignore
const QuizContext = createContext();

const quizzes = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    a: "<script href='script.js'>",
    b: "<script name='script.js'>",
    c: "<script src='script.js'>",
    d: "<script file='script.js'>",
    correct: "c",
  },
  {
    question: "How do you write a comment in JavaScript?",
    a: "// This is a comment",
    b: "' This is a comment",
    c: "/* This is a comment */",
    d: "# This is a comment",
    correct: "a",
  },
  {
    question: "Which built-in method returns the length of a string?",
    a: "length()",
    b: "len()",
    c: "size()",
    d: "length",
    correct: "d",
  },
  {
    question: "What is the result of 'typeof null'?",
    a: "object",
    b: "null",
    c: "undefined",
    d: "string",
    correct: "a",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    a: "=",
    b: "==",
    c: "===",
    d: "->",
    correct: "a",
  },
  {
    question:
      "What is the difference between 'var', 'let', and 'const' keywords?",
    a: "They are all the same",
    b: "Var is function-scoped, let and const are block-scoped",
    c: "Var and let are mutable, const is immutable",
    d: "Var and const are block-scoped, let is function-scoped",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof NaN);",
    a: "number",
    b: "NaN",
    c: "undefined",
    d: "string",
    correct: "a",
  },
  {
    question: "Which method is used to add elements to the end of an array?",
    a: "push()",
    b: "pop()",
    c: "shift()",
    d: "unshift()",
    correct: "a",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    a: "Refers to the global object",
    b: "Refers to the current function",
    c: "Refers to the object that owns the method",
    d: "Refers to the previous object",
    correct: "c",
  },
  {
    question: "How do you create an object in JavaScript?",
    a: "var obj = Object();",
    b: "var obj = new Object();",
    c: "var obj = {}",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "What is the output of the following code: console.log(typeof []);",
    a: "object",
    b: "array",
    c: "null",
    d: "undefined",
    correct: "a",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    a: "pop()",
    b: "shift()",
    c: "splice()",
    d: "slice()",
    correct: "a",
  },
  {
    question: "What is the result of the following expression: 5 + '5'",
    a: "10",
    b: "55",
    c: "Error",
    d: "NaN",
    correct: "b",
  },
  {
    question: "What is the correct way to define a function in JavaScript?",
    a: "function myFunction() {}",
    b: "myFunction() {}",
    c: "var myFunction = function() {}",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What is the difference between '==' and '===' operators?",
    a: "No difference",
    b: "== checks for value equality, === checks for both value and type equality",
    c: "=== checks for value equality, == checks for both value and type equality",
    d: "They are used for different purposes",
    correct: "b",
  },
];

export default function QuizHolder(props) {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider
      value={{
        start,
        exit,
        setStart,
        setExit,
        quizzes,
        correct,
        setCorrect,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
