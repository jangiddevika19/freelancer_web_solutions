const QUIZZES = [
  {
    id: 1,
    title: "React Basics Quiz",
    category: "React",
    description:
      "Test your understanding of React fundamentals, components, JSX, props and state.",
    questions: [
      {
        question: "What is React mainly used for?",
        options: [
          "Building user interfaces",
          "Managing databases",
          "Creating operating systems",
          "Designing hardware",
        ],
        answer: "Building user interfaces",
      },

      {
        question: "Which syntax is commonly used to write HTML-like code in React?",
        options: ["JSX", "SQL", "XML", "PHP"],
        answer: "JSX",
      },

      {
        question: "Which React Hook is used to manage state?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: "useState",
      },

      {
        question: "What are props used for in React?",
        options: [
          "Passing data between components",
          "Creating databases",
          "Styling only",
          "Installing packages",
        ],
        answer: "Passing data between components",
      },

      {
        question: "Which of these is a React component?",
        options: [
          "A reusable UI building block",
          "A database table",
          "A CSS file",
          "A server",
        ],
        answer: "A reusable UI building block",
      },
    ],
  },

  {
    id: 2,
    title: "JavaScript Basics Quiz",
    category: "JavaScript",
    description:
      "Test your knowledge of JavaScript variables, functions, arrays, objects and basic concepts.",
    questions: [
      {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "define", "variable"],
        answer: "let",
      },

      {
        question: "Which method is used to add an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()",
      },

      {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "===",
      },

      {
        question: "Which keyword is used to define a function?",
        options: ["function", "method", "func", "define"],
        answer: "function",
      },

      {
        question: "Which data type represents true or false?",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "Boolean",
      },
    ],
  },
];

export default QUIZZES;