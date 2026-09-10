import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
  Code2,
  Coffee,
  Braces,
  Atom,
  Globe,
  Database,
  Leaf,
  Brain,
  Terminal,
  ChevronRight,
  Lightbulb,
  } from "lucide-react";

/* =========================================================
   QUIZ DATA
========================================================= */

const quizData = {
  python: {
    title: "Python",
    description: "Test your Python fundamentals and programming knowledge.",
    icon: Code2,
    questions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1,
      },
      {
        question: "Which of the following is a mutable data type in Python?",
        options: ["Tuple", "String", "List", "Integer"],
        answer: 2,
      },
      {
        question: "Which symbol is used for comments in Python?",
        options: ["//", "/*", "#", "<!--"],
        answer: 2,
      },
      {
        question: "Which function is used to get the length of a list?",
        options: ["size()", "length()", "len()", "count()"],
        answer: 2,
      },
      {
        question: "What is the output type of input() in Python?",
        options: ["Integer", "String", "Boolean", "Float"],
        answer: 1,
      },
      {
        question: "Which keyword is used to create a class in Python?",
        options: ["object", "class", "struct", "new"],
        answer: 1,
      },
      {
        question: "Which operator is used for exponentiation in Python?",
        options: ["^", "**", "//", "%%"],
        answer: 1,
      },
      {
        question: "Which collection stores key-value pairs in Python?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: 3,
      },
      {
        question: "Which keyword is used to handle exceptions?",
        options: ["catch", "error", "try", "exception"],
        answer: 2,
      },
      {
        question: "Which of these is NOT a Python data type?",
        options: ["List", "Tuple", "Dictionary", "Character"],
        answer: 3,
      },
    ],
  },

  java: {
    title: "Java",
    description: "Test your Core Java and object-oriented programming concepts.",
    icon: Coffee,
    questions: [
      {
        question: "Which keyword is used to create a class in Java?",
        options: ["struct", "class", "object", "define"],
        answer: 1,
      },
      {
        question: "Which method is the entry point of a Java application?",
        options: ["start()", "run()", "main()", "execute()"],
        answer: 2,
      },
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["implements", "inherits", "extends", "super"],
        answer: 2,
      },
      {
        question: "Which of the following is NOT a primitive data type?",
        options: ["int", "float", "String", "boolean"],
        answer: 2,
      },
      {
        question: "Which keyword is used to create an object?",
        options: ["create", "object", "new", "instance"],
        answer: 2,
      },
      {
        question: "Which concept allows the same method name with different parameters?",
        options: [
          "Inheritance",
          "Method Overloading",
          "Encapsulation",
          "Abstraction",
        ],
        answer: 1,
      },
      {
        question: "Which collection does NOT allow duplicate elements?",
        options: ["List", "Set", "ArrayList", "LinkedList"],
        answer: 1,
      },
      {
        question: "Which keyword prevents a class from being inherited?",
        options: ["static", "private", "final", "constant"],
        answer: 2,
      },
      {
        question: "Which exception occurs when dividing an integer by zero?",
        options: [
          "NullPointerException",
          "ArithmeticException",
          "IOException",
          "ClassNotFoundException",
        ],
        answer: 1,
      },
      {
        question: "Which framework is commonly used for building Java web applications?",
        options: ["React", "Spring Boot", "Tailwind", "Bootstrap"],
        answer: 1,
      },
    ],
  },

  javascript: {
    title: "JavaScript",
    description: "Test your JavaScript fundamentals and modern JS concepts.",
    icon: Braces,
    questions: [
      {
        question: "Which keyword declares a block-scoped variable that can be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: 1,
      },
      {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: [
          "JSON.parse()",
          "JSON.stringify()",
          "JSON.convert()",
          "JSON.object()",
        ],
        answer: 0,
      },
      {
        question: "Which operator checks both value and type?",
        options: ["==", "=", "===", "!="],
        answer: 2,
      },
      {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: 0,
      },
      {
        question: "Which method removes the last element from an array?",
        options: ["shift()", "remove()", "pop()", "delete()"],
        answer: 2,
      },
      {
        question: "What does DOM stand for?",
        options: [
          "Document Object Model",
          "Data Object Method",
          "Document Oriented Model",
          "Digital Object Management",
        ],
        answer: 0,
      },
      {
        question: "Which function is commonly used to run code after a delay?",
        options: ["setDelay()", "setTimeout()", "delay()", "wait()"],
        answer: 1,
      },
      {
        question: "Which keyword is used to declare a constant?",
        options: ["let", "var", "constant", "const"],
        answer: 3,
      },
      {
        question: "Which array method creates a new array by transforming each element?",
        options: ["filter()", "map()", "find()", "forEach()"],
        answer: 1,
      },
      {
        question: "Which value represents an intentionally empty value?",
        options: ["undefined", "null", "empty", "void"],
        answer: 1,
      },
    ],
  },

  react: {
    title: "React.js",
    description: "Test your React fundamentals, hooks and component concepts.",
    icon: Atom,
    questions: [
      {
        question: "React is mainly used for building what?",
        options: [
          "Databases",
          "User Interfaces",
          "Operating Systems",
          "Compilers",
        ],
        answer: 1,
      },
      {
        question: "Which hook is used to manage state in a functional component?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: 1,
      },
      {
        question: "Which hook is commonly used for side effects?",
        options: ["useState", "useEffect", "useContext", "useId"],
        answer: 1,
      },
      {
        question: "What syntax is commonly used to write HTML-like code in React?",
        options: ["XML", "JSX", "TSX only", "HTMLX"],
        answer: 1,
      },
      {
        question: "Which prop helps React identify list items efficiently?",
        options: ["id", "index", "key", "ref"],
        answer: 2,
      },
      {
        question: "Which command commonly creates a React project using Vite?",
        options: [
          "npm create vite@latest",
          "npm react start",
          "npm install react-project",
          "react new",
        ],
        answer: 0,
      },
      {
        question: "What is a React component?",
        options: [
          "A reusable UI building block",
          "A database table",
          "A CSS file",
          "A server",
        ],
        answer: 0,
      },
      {
        question: "Which library is commonly used for page navigation in React?",
        options: ["React Router", "Axios", "Mongoose", "Jest"],
        answer: 0,
      },
      {
        question: "Props in React are generally used to do what?",
        options: [
          "Store database records",
          "Pass data to components",
          "Create CSS",
          "Start a server",
        ],
        answer: 1,
      },
      {
        question: "What happens when React state changes?",
        options: [
          "The component can re-render",
          "The browser closes",
          "The database resets",
          "The server stops",
        ],
        answer: 0,
      },
    ],
  },

  htmlcss: {
    title: "HTML & CSS",
    description: "Test your web structure, styling and responsive design knowledge.",
    icon: Globe,
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyperlink Text Management Language",
          "Home Tool Markup Language",
        ],
        answer: 0,
      },
      {
        question: "Which language is mainly used to style web pages?",
        options: ["Java", "CSS", "Python", "SQL"],
        answer: 1,
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
      },
      {
        question: "Which CSS property changes the text color?",
        options: ["font-color", "text-color", "color", "foreground"],
        answer: 2,
      },
      {
        question: "Which CSS layout system is useful for one-dimensional layouts?",
        options: ["Float", "Flexbox", "Table", "Position"],
        answer: 1,
      },
      {
        question: "Which CSS property controls the space inside an element?",
        options: ["margin", "padding", "border", "gap"],
        answer: 1,
      },
      {
        question: "Which HTML tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 3,
      },
      {
        question: "Which CSS property makes an element rounded?",
        options: ["corner-radius", "border-radius", "radius", "round"],
        answer: 1,
      },
      {
        question: "Which CSS unit is relative to the root font size?",
        options: ["px", "em", "rem", "%"],
        answer: 2,
      },
      {
        question: "Which HTML element is semantic for the main navigation?",
        options: ["<nav>", "<navigation>", "<menu-bar>", "<links>"],
        answer: 0,
      },
    ],
  },

  sql: {
    title: "SQL / MySQL",
    description: "Test your SQL queries, databases and relational concepts.",
    icon: Database,
    questions: [
      {
        question: "Which SQL command is used to retrieve data?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: 1,
      },
      {
        question: "Which command is used to add new records?",
        options: ["ADD", "INSERT", "CREATE", "APPEND"],
        answer: 1,
      },
      {
        question: "Which command modifies existing records?",
        options: ["CHANGE", "UPDATE", "MODIFY", "ALTER"],
        answer: 1,
      },
      {
        question: "Which command removes records from a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: 1,
      },
      {
        question: "Which key uniquely identifies a row in a table?",
        options: ["Foreign Key", "Primary Key", "Unique Index", "Reference Key"],
        answer: 1,
      },
      {
        question: "Which clause filters rows in a SQL query?",
        options: ["FILTER", "WHERE", "HAVING", "CHECK"],
        answer: 1,
      },
      {
        question: "Which clause is used to sort query results?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        answer: 1,
      },
      {
        question: "Which SQL function counts rows?",
        options: ["TOTAL()", "COUNT()", "NUMBER()", "ROWS()"],
        answer: 1,
      },
      {
        question: "Which command creates a new table?",
        options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "ADD TABLE"],
        answer: 1,
      },
      {
        question: "Which clause groups rows with the same values?",
        options: ["GROUP BY", "ORDER BY", "MERGE BY", "COLLECT BY"],
        answer: 0,
      },
    ],
  },

  springboot: {
    title: "Spring Boot",
    description: "Test your Spring Boot and backend development fundamentals.",
    icon: Leaf,
    questions: [
      {
        question: "Spring Boot is mainly used for building what?",
        options: [
          "Backend applications",
          "Image editing software",
          "Operating systems",
          "Database engines",
        ],
        answer: 0,
      },
      {
        question: "Which annotation is commonly used for a REST controller?",
        options: [
          "@Controller",
          "@RestController",
          "@Service",
          "@Repository",
        ],
        answer: 1,
      },
      {
        question: "Which annotation is used to define a service component?",
        options: ["@Service", "@Bean", "@ComponentScan", "@Autowired"],
        answer: 0,
      },
      {
        question: "Which annotation is commonly used for dependency injection?",
        options: ["@InjectData", "@Autowired", "@Dependency", "@Wire"],
        answer: 1,
      },
      {
        question: "Which annotation maps a GET request?",
        options: [
          "@GetMapping",
          "@FetchMapping",
          "@ReadMapping",
          "@RequestGet",
        ],
        answer: 0,
      },
      {
        question: "Which annotation maps a POST request?",
        options: [
          "@SendMapping",
          "@PostMapping",
          "@CreateMapping",
          "@InsertMapping",
        ],
        answer: 1,
      },
      {
        question: "Which file commonly stores Spring Boot configuration?",
        options: [
          "application.properties",
          "spring.config",
          "boot.xml",
          "server.java",
        ],
        answer: 0,
      },
      {
        question: "Which dependency is commonly used for JPA database access?",
        options: [
          "Spring Data JPA",
          "Spring Web",
          "Spring Security",
          "Spring Test",
        ],
        answer: 0,
      },
      {
        question: "Which annotation marks a class as a JPA entity?",
        options: ["@Database", "@TableEntity", "@Entity", "@Model"],
        answer: 2,
      },
      {
        question: "Which tool is commonly used to test REST APIs?",
        options: ["Figma", "Postman", "Photoshop", "Maven"],
        answer: 1,
      },
    ],
  },

  dsa: {
    title: "DSA",
    description: "Test your Data Structures and Algorithms fundamentals.",
    icon: Brain,
    questions: [
      {
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: 1,
      },
      {
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: 1,
      },
      {
        question: "Which data structure consists of nodes connected by edges?",
        options: ["Array", "Stack", "Graph", "Queue"],
        answer: 2,
      },
      {
        question: "Which sorting algorithm repeatedly swaps adjacent elements?",
        options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"],
        answer: 1,
      },
      {
        question: "What is the worst-case time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: 2,
      },
      {
        question: "Which data structure is commonly used for recursion?",
        options: ["Queue", "Stack", "Graph", "Hash Table"],
        answer: 1,
      },
      {
        question: "Which structure represents hierarchical data?",
        options: ["Tree", "Array", "Queue", "Stack"],
        answer: 0,
      },
      {
        question: "Binary search requires what kind of array?",
        options: [
          "Random",
          "Sorted",
          "Circular",
          "Two-dimensional",
        ],
        answer: 1,
      },
      {
        question: "Which data structure provides key-value storage?",
        options: ["Stack", "Hash Table", "Queue", "Tree only"],
        answer: 1,
      },
      {
        question: "Which traversal visits the root between the left and right subtrees?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        answer: 1,
      },
    ],
  },

  general: {
    title: "General Programming",
    description: "A mixed quiz covering common programming and web development concepts.",
    icon: Terminal,
    questions: [
      {
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Application Process Integration",
          "Advanced Programming Internet",
          "Application Program Instruction",
        ],
        answer: 0,
      },
      {
        question: "Which HTTP method is commonly used to retrieve data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        answer: 2,
      },
      {
        question: "Which HTTP status code means 'Not Found'?",
        options: ["200", "301", "404", "500"],
        answer: 2,
      },
      {
        question: "Which tool is commonly used for version control?",
        options: ["Git", "Figma", "Postman", "Vite"],
        answer: 0,
      },
      {
        question: "Which platform is commonly used to host Git repositories?",
        options: ["GitHub", "MySQL", "Maven", "Node"],
        answer: 0,
      },
      {
        question: "What does JSON commonly represent?",
        options: [
          "A data interchange format",
          "A database engine",
          "A programming language",
          "A CSS framework",
        ],
        answer: 0,
      },
      {
        question: "Which protocol is commonly used for secure HTTP communication?",
        options: ["FTP", "HTTP", "HTTPS", "SMTP"],
        answer: 2,
      },
      {
        question: "Which tool is commonly used to install JavaScript packages?",
        options: ["Maven", "npm", "Gradle", "Composer"],
        answer: 1,
      },
      {
        question: "What does CRUD stand for?",
        options: [
          "Create Read Update Delete",
          "Create Run Upload Download",
          "Code Read Update Deploy",
          "Create Remove Upload Delete",
        ],
        answer: 0,
      },
      {
        question: "Which database is relational?",
        options: ["MongoDB", "MySQL", "Redis", "Cassandra"],
        answer: 1,
      },
  ],
  },
};

/* =========================================================
   TOPIC LIST
========================================================= */

const topics = [
  {
    id: "python",
    title: "Python",
    description: "Python fundamentals",
    icon: Code2,
  },
  {
    id: "java",
    title: "Java",
    description: "Core Java & OOP",
    icon: Coffee,
  },
  {
    id: "javascript",
    title: "JavaScript",
    description: "JS fundamentals",
    icon: Braces,
  },
  {
    id: "react",
    title: "React.js",
    description: "React & Hooks",
    icon: Atom,
  },
  {
    id: "htmlcss",
    title: "HTML & CSS",
    description: "Web fundamentals",
    icon: Globe,
  },
  {
    id: "sql",
    title: "SQL / MySQL",
    description: "Database concepts",
    icon: Database,
  },
  {
    id: "springboot",
    title: "Spring Boot",
    description: "Java backend",
    icon: Leaf,
  },
  {
    id: "dsa",
    title: "DSA",
    description: "Data Structures",
    icon: Brain,
  },
  {
    id: "general",
    title: "General Programming",
    description: "Mixed concepts",
    icon: Terminal,
  },
];


/* =========================================================
   CODING PRACTICE
========================================================= */

const codingPractice = [
  {
    title: "Reverse a String",
    category: "Beginner",
    question: 'Write a program to reverse the string "hello".',
    example: "Input: hello  →  Output: olleh",
    hint: "Think about reading the characters from the end to the beginning.",
    solution: `String str = "hello";
String reversed = new StringBuilder(str).reverse().toString();
System.out.println(reversed);`,
  },
  {
    title: "Palindrome Check",
    category: "Beginner",
    question: 'Check whether the word "madam" is a palindrome.',
    example: "Input: madam  →  Output: Palindrome",
    hint: "Compare the original value with its reversed value.",
    solution: `String str = "madam";
String reversed = new StringBuilder(str).reverse().toString();

if (str.equals(reversed)) {
    System.out.println("Palindrome");
} else {
    System.out.println("Not Palindrome");
}` ,
  },
  {
    title: "Factorial of a Number",
    category: "Beginner",
    question: "Find the factorial of 5.",
    example: "5! = 5 × 4 × 3 × 2 × 1",
    hint: "Multiply all positive integers from 1 up to the given number.",
    solution: `int n = 5;
int factorial = 1;

for (int i = 1; i <= n; i++) {
    factorial *= i;
}

System.out.println(factorial);`,
  },
  {
    title: "Fibonacci Series",
    category: "Beginner",
    question: "Print the first 6 numbers of the Fibonacci series.",
    example: "The series starts with 0, 1 and each next number is the sum of the previous two.",
    hint: "Start with 0 and 1, then keep adding the last two numbers.",
    solution: `int n = 6;
int a = 0, b = 1;

for (int i = 0; i < n; i++) {
    System.out.print(a + " ");
    int next = a + b;
    a = b;
    b = next;
}`,
  },
  {
    title: "Prime Number Check",
    category: "Beginner",
    question: "Check whether 17 is a prime number.",
    example: "A prime number has exactly two positive factors: 1 and itself.",
    hint: "Check whether any number other than 1 and the number itself divides it exactly.",
    solution: `int n = 17;
boolean isPrime = n > 1;

for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
}

System.out.println(isPrime ? "Prime" : "Not Prime");`,
  },
  {
    title: "Second Largest Element",
    category: "Interview",
    question: "Find the second largest value in [10, 5, 8, 20, 15].",
    example: "Input: [10, 5, 8, 20, 15]  →  Output: 15",
    hint: "Keep track of the largest and second-largest values while scanning the array.",
    solution: `int[] numbers = {10, 5, 8, 20, 15};
int largest = Integer.MIN_VALUE;
int secondLargest = Integer.MIN_VALUE;

for (int number : numbers) {
    if (number > largest) {
        secondLargest = largest;
        largest = number;
    } else if (number > secondLargest && number != largest) {
        secondLargest = number;
    }
}

System.out.println(secondLargest);`,
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Quiz() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const [selectedPractice, setSelectedPractice] = useState(null);
  const [practiceQuestion, setPracticeQuestion] = useState(0);
  const [showPracticeHint, setShowPracticeHint] = useState(false);
  const [showPracticeAnswer, setShowPracticeAnswer] = useState(false);
  const [practiceCompleted, setPracticeCompleted] = useState(false);

  /* =======================================================
     OPEN CODING PRACTICE FROM RESOURCE HUB
     /quiz?mode=practice
  ======================================================= */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");

    if (mode !== "practice") return;

    const scrollToPractice = () => {
      const section = document.getElementById("coding-practice");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Wait for the topic-selection screen and Coding Practice section to render.
    const timer = setTimeout(scrollToPractice, 150);

    return () => clearTimeout(timer);
  }, []);

  /* =======================================================
     SELECT TOPIC
  ======================================================= */

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     CHANGE TOPIC
  ======================================================= */

  const handleChangeTopic = () => {
    setSelectedTopic(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     SELECT ANSWER
  ======================================================= */

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    const question = quizData[selectedTopic].questions[currentQuestion];

    if (index === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  /* =======================================================
     NEXT QUESTION
  ======================================================= */

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const totalQuestions =
      quizData[selectedTopic].questions.length;

    if (currentQuestion === totalQuestions - 1) {
      setShowResult(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);

    setSelectedAnswer(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RESTART SAME QUIZ
  ======================================================= */

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     START CODING PRACTICE
  ======================================================= */

  const handlePracticeSelect = (problem) => {
    setSelectedPractice(problem);
    setPracticeQuestion(0);
    setShowPracticeHint(false);
    setPracticeCompleted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     NEXT PRACTICE QUESTION
  ======================================================= */

  const handlePracticeNext = () => {
    if (!selectedPractice) return;

    if (practiceQuestion === codingPractice.length - 1) {
      setPracticeCompleted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setPracticeQuestion((prev) => prev + 1);
    setShowPracticeHint(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     PREVIOUS PRACTICE QUESTION
  ======================================================= */

  const handlePracticePrevious = () => {
    if (practiceQuestion === 0) return;

    setPracticeQuestion((prev) => prev - 1);
    setShowPracticeHint(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     EXIT CODING PRACTICE
  ======================================================= */

  const handleExitPractice = () => {
    setSelectedPractice(null);
    setPracticeQuestion(0);
    setShowPracticeHint(false);
    setPracticeCompleted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     BACK TO RESOURCES
  ======================================================= */

  const handleBackToResources = () => {
    window.location.href = "/resource-hub";
  };

  /* =======================================================
     CODING PRACTICE SCREEN
  ======================================================= */

  if (selectedPractice) {
    const currentPractice = codingPractice[practiceQuestion];
    const practiceTotal = codingPractice.length;
    const practiceProgress =
      ((practiceQuestion + 1) / practiceTotal) * 100;

    if (practiceCompleted) {
      return (
        <div className="min-h-screen bg-slate-50 text-slate-900">

          {/* HEADER */}
          <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">

              <button
                type="button"
                onClick={handleExitPractice}
                className="
                  inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5
                  text-[11px] font-semibold text-slate-600 transition
                  hover:bg-sky-50 hover:text-sky-600
                  sm:gap-2 sm:px-3 sm:py-2 sm:text-sm
                "
              >
                <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Back to Practice
              </button>

              <div className="flex items-center gap-2">
                <div
                  className="
                    flex h-8 w-8 items-center justify-center rounded-xl
                    bg-gradient-to-br from-sky-500 to-blue-700 text-white
                    shadow-md shadow-sky-500/20 sm:h-9 sm:w-9
                  "
                >
                  <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>

                <span className="text-[11px] font-bold text-slate-900 sm:text-sm">
                  Coding Practice
                </span>
              </div>

              <div className="w-6 sm:w-28" />
            </div>
          </header>

          {/* RESULT */}
          <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-lg text-center"
            >
              <div
                className="
                  rounded-3xl border border-slate-200 bg-white p-6
                  shadow-[0_15px_50px_rgba(15,23,42,0.08)] sm:p-10
                "
              >
                <div
                  className="
                    mx-auto flex h-20 w-20 items-center justify-center
                    rounded-3xl bg-gradient-to-br from-sky-400 to-blue-700
                    text-white shadow-xl shadow-sky-500/20
                  "
                >
                  <CheckCircle2 className="h-9 w-9" />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-wider text-sky-500 sm:text-xs">
                  Practice Completed
                </p>

                <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
                  Great Work!
                </h1>

                <p className="mt-3 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  You completed all {practiceTotal} coding practice problems.
                  Keep practicing to improve your problem-solving skills.
                </p>

                <div className="my-7 rounded-2xl bg-slate-50 p-5 sm:my-8 sm:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Problems Completed
                  </p>

                  <div className="mt-2 text-5xl font-black text-slate-950 sm:text-6xl">
                    {practiceTotal}
                  </div>

                  <p className="mt-2 text-xs font-semibold text-sky-600 sm:text-sm">
                    Coding Challenges
                  </p>
                </div>

                <p className="text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                  Try solving these problems in your preferred programming
                  language and compare different approaches.
                </p>

                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8">

                  <button
                    type="button"
                    onClick={() => {
                      setPracticeQuestion(0);
                      setShowPracticeHint(false);
                      setShowPracticeAnswer(false);
                      setPracticeCompleted(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="
                      flex w-full items-center justify-center gap-2 rounded-xl
                      bg-slate-950 px-4 py-3 text-xs font-bold text-white
                      transition hover:bg-slate-800 sm:py-3.5 sm:text-sm
                    "
                  >
                    <RotateCcw className="h-4 w-4" />
                    Practice Again
                  </button>

                  <button
                    type="button"
                    onClick={handleBackToResources}
                    className="
                      flex w-full items-center justify-center gap-2 rounded-xl
                      border border-slate-200 bg-white px-4 py-3 text-xs
                      font-bold text-slate-700 transition hover:bg-slate-50
                      sm:py-3.5 sm:text-sm
                    "
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Resources
                  </button>

                </div>
              </div>
            </motion.div>
          </main>

          <footer className="border-t border-slate-200 bg-white px-4 py-7 sm:px-6 sm:py-9">
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
                © {new Date().getFullYear()} Devika Resources.
                All rights reserved.
              </p>
            </div>
          </footer>

        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">

        {/* HEADER */}
        <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">

            <button
              type="button"
              onClick={handleExitPractice}
              className="
                inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5
                text-[11px] font-semibold text-slate-600 transition
                hover:bg-sky-50 hover:text-sky-600
                sm:gap-2 sm:px-3 sm:py-2 sm:text-sm
              "
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Back to Practice
            </button>

            <div className="flex items-center gap-2">
              <div
                className="
                  flex h-8 w-8 items-center justify-center rounded-xl
                  bg-gradient-to-br from-sky-500 to-blue-700 text-white
                  shadow-md shadow-sky-500/20 sm:h-9 sm:w-9
                "
              >
                <Code2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <span className="text-[11px] font-bold text-slate-900 sm:text-sm">
                Coding Practice
              </span>
            </div>

            <div className="w-6 sm:w-28" />
          </div>
        </header>

        {/* MAIN */}
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-14">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >

            {/* TITLE */}
            <div className="text-center">

              <div
                className="
                  mx-auto inline-flex items-center gap-2 rounded-full
                  border border-sky-200 bg-white px-3 py-1.5 text-[9px]
                  font-bold uppercase tracking-wide text-sky-600 shadow-sm
                  sm:px-4 sm:py-2 sm:text-xs
                "
              >
                <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Coding Practice
              </div>

              <h1
                className="
                  mt-4 text-3xl font-black tracking-tight text-slate-950
                  sm:text-5xl
                "
              >
                Solve &{" "}
                <span
                  className="
                    bg-gradient-to-r from-sky-500 to-blue-700
                    bg-clip-text text-transparent
                  "
                >
                  Practice
                </span>
              </h1>

              <p
                className="
                  mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500
                  sm:text-sm sm:leading-6
                "
              >
                Work through each coding problem step by step and strengthen
                your logic before interviews.
              </p>

            </div>

            {/* PROGRESS */}
            <div className="mt-7 sm:mt-10">

              <div
                className="
                  mb-2 flex items-center justify-between text-[10px]
                  font-bold text-slate-500 sm:text-xs
                "
              >
                <span>
                  Problem {practiceQuestion + 1} of {practiceTotal}
                </span>

                <span>{Math.round(practiceProgress)}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  className="
                    h-full rounded-full bg-gradient-to-r
                    from-sky-400 to-blue-600
                  "
                  animate={{ width: `${practiceProgress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

            </div>

            {/* PRACTICE CARD */}
            <motion.div
              key={currentPractice.title}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              className="
                mt-5 rounded-2xl border border-slate-200 bg-white p-4
                shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                sm:mt-7 sm:rounded-3xl sm:p-7
              "
            >

              {/* TOP ROW */}
              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-10 w-10 shrink-0 items-center justify-center
                      rounded-xl bg-sky-50 text-sky-600 sm:h-12 sm:w-12
                    "
                  >
                    <Code2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <div>
                    <span
                      className="
                        rounded-full bg-sky-50 px-2.5 py-1 text-[9px]
                        font-bold text-sky-600
                      "
                    >
                      {currentPractice.category}
                    </span>

                    <h2 className="mt-2 text-base font-black text-slate-950 sm:text-xl">
                      {currentPractice.title}
                    </h2>
                  </div>

                </div>

                <span className="text-[9px] font-bold text-slate-400 sm:text-xs">
                  #{practiceQuestion + 1}
                </span>

              </div>

              {/* QUESTION */}
              <div className="mt-6">

                <p className="text-[9px] font-bold uppercase tracking-wider text-sky-500 sm:text-xs">
                  Problem
                </p>

                <h3
                  className="
                    mt-2 text-base font-black leading-6 text-slate-950
                    sm:text-xl sm:leading-8
                  "
                >
                  {currentPractice.question}
                </h3>

              </div>

              {/* EXAMPLE */}
              <div className="mt-5 rounded-xl bg-slate-50 p-4 sm:p-5">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                  Example
                </p>

                <p className="mt-2 text-xs font-semibold leading-5 text-slate-700 sm:text-sm sm:leading-6">
                  {currentPractice.example}
                </p>
              </div>

              {/* HINT */}
              <div className="mt-3">

                <button
                  type="button"
                  onClick={() => setShowPracticeHint((prev) => !prev)}
                  className="
                    inline-flex items-center gap-2 rounded-xl border
                    border-amber-200 bg-amber-50 px-3 py-2 text-[10px]
                    font-bold text-amber-700 transition hover:bg-amber-100
                    sm:px-4 sm:py-2.5 sm:text-xs
                  "
                >
                  <Lightbulb className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  {showPracticeHint ? "Hide Hint" : "Show Hint"}
                </button>

                <AnimatePresence>
                  {showPracticeHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -5 }}
                      className="
                        mt-3 overflow-hidden rounded-xl border
                        border-amber-100 bg-amber-50 p-4
                      "
                    >
                      <p className="text-[9px] font-bold uppercase tracking-wide text-amber-700 sm:text-xs">
                        Hint
                      </p>

                      <p className="mt-1 text-xs leading-5 text-amber-800 sm:text-sm sm:leading-6">
                        {currentPractice.hint}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* ANSWER / SOLUTION */}
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowPracticeAnswer((prev) => !prev)}
                  className="
                    inline-flex w-full items-center justify-between gap-3 rounded-xl
                    border border-emerald-200 bg-emerald-50 px-4 py-3
                    text-left text-xs font-bold text-emerald-700 transition
                    hover:bg-emerald-100 sm:text-sm
                  "
                >
                  <span className="flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    {showPracticeAnswer ? "Hide Answer" : "Show Answer"}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 sm:text-xs">
                    Java Solution
                  </span>
                </button>

                <AnimatePresence>
                  {showPracticeAnswer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -5 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -5 }}
                      className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-950"
                    >
                      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">
                          Answer / Solution
                        </p>
                        <span className="text-[9px] font-semibold text-sky-400 sm:text-xs">
                          Java
                        </span>
                      </div>

                      <pre className="overflow-x-auto p-4 text-left text-[11px] leading-5 text-slate-100 sm:p-5 sm:text-xs sm:leading-6">
                        <code>{currentPractice.solution}</code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* NOTE */}
              <div
                className="
                  mt-5 rounded-xl border border-sky-100 bg-sky-50/60
                  p-4
                "
              >
                <p className="text-[10px] font-semibold leading-5 text-slate-500 sm:text-xs">
                  Try solving it yourself first. You can write the solution
                  in Java, Python, JavaScript or any language you prefer.
                </p>
              </div>

              {/* NAVIGATION */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">

                <button
                  type="button"
                  onClick={handlePracticePrevious}
                  disabled={practiceQuestion === 0}
                  className={`
                    flex flex-1 items-center justify-center gap-2 rounded-xl
                    border px-4 py-3 text-xs font-bold transition
                    sm:py-3.5 sm:text-sm
                    ${
                      practiceQuestion === 0
                        ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-300"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                <button
                  type="button"
                  onClick={handlePracticeNext}
                  className="
                    flex flex-1 items-center justify-center gap-2 rounded-xl
                    bg-slate-950 px-4 py-3 text-xs font-bold text-white
                    transition hover:bg-slate-800 sm:py-3.5 sm:text-sm
                  "
                >
                  {practiceQuestion === practiceTotal - 1
                    ? "Finish Practice"
                    : "Next Problem"}

                  <ArrowRight className="h-4 w-4" />
                </button>

              </div>

            </motion.div>

            {/* FOOT NOTE */}
            <div className="mt-4 text-center">
              <p className="text-[9px] font-semibold text-slate-400 sm:text-xs">
                {practiceTotal} coding problems • Step-by-step practice
              </p>
            </div>

          </motion.div>

        </main>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white px-4 py-7 sm:px-6 sm:py-9">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
              © {new Date().getFullYear()} Devika Resources.
              All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    );
  }

  /* =======================================================
     TOPIC SELECTION SCREEN
  ======================================================= */

  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">

        {/* HEADER */}
        <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">

            <button
              type="button"
              onClick={handleBackToResources}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-2
                py-1.5
                text-[11px]
                font-semibold
                text-slate-600
                transition
                hover:bg-sky-50
                hover:text-sky-600
                sm:gap-2
                sm:px-3
                sm:py-2
                sm:text-sm
              "
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Back to Resources
            </button>

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-sky-500
                  to-blue-700
                  text-white
                  shadow-md
                  shadow-sky-500/20
                  sm:h-9
                  sm:w-9
                "
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <span className="text-[11px] font-bold text-slate-900 sm:text-sm">
                Developer Quiz
              </span>

            </div>

            <div className="w-6 sm:w-28" />

          </div>
        </header>

        {/* TOPIC SELECTION */}
        <main className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-14">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-center"
          >

            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-200
                bg-white
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-wide
                text-sky-600
                shadow-sm
                sm:px-4
                sm:py-2
                sm:text-xs
              "
            >
              <Trophy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />

              Test Your Knowledge
            </div>

            <h1
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-5xl
              "
            >
              Developer{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-sky-500
                  to-blue-700
                  bg-clip-text
                  text-transparent
                "
              >
                Quiz
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
                sm:leading-6
              "
            >
              Choose a topic and test your programming
              knowledge with a quick 10-question quiz.
            </p>

          </motion.div>

          {/* TOPIC GRID */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            className="
              mx-auto
              mt-8
              grid
              max-w-5xl
              grid-cols-1
              gap-3
              sm:mt-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {topics.map((topic, index) => {

              const Icon = topic.icon;

              return (
                <motion.button
                  key={topic.id}
                  type="button"
                  onClick={() => handleTopicSelect(topic.id)}
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08 * index,
                  }}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-4
                    text-left
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-200
                    hover:border-sky-300
                    hover:shadow-[0_15px_40px_rgba(14,165,233,0.12)]
                    sm:p-5
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-sky-50
                      text-sky-600
                      transition
                      group-hover:bg-sky-500
                      group-hover:text-white
                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">

                    <h2
                      className="
                        text-sm
                        font-black
                        text-slate-950
                        sm:text-base
                      "
                    >
                      {topic.title}
                    </h2>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        font-medium
                        text-slate-500
                        sm:text-xs
                      "
                    >
                      {topic.description}
                    </p>

                    <div
                      className="
                        mt-2
                        text-[9px]
                        font-bold
                        text-sky-500
                        sm:text-[10px]
                      "
                    >
                      10 Questions
                    </div>

                  </div>

                  {/* ARROW */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-400
                      transition
                      group-hover:bg-sky-50
                      group-hover:text-sky-600
                    "
                  >
                    <ChevronRight className="h-4 w-4" />
                  </div>

                </motion.button>
              );
            })}

          </motion.div>

          {/* INFO */}
          <div
            className="
              mx-auto
              mt-7
              max-w-5xl
              rounded-2xl
              border
              border-sky-100
              bg-sky-50/60
              px-4
              py-4
              text-center
              sm:mt-8
              sm:px-6
            "
          >
            <p
              className="
                text-[10px]
                font-semibold
                leading-5
                text-slate-500
                sm:text-xs
              "
            >
              Choose any topic to start. Each quiz contains
              10 multiple-choice questions and your score
              will be shown at the end.
            </p>
          </div>


          {/* CODING PRACTICE */}
          <section
            id="coding-practice"
            className="mx-auto mt-10 max-w-5xl scroll-mt-24 sm:mt-14"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="
                  mx-auto inline-flex items-center gap-2 rounded-full
                  border border-slate-200 bg-white px-3 py-1.5
                  text-[9px] font-bold uppercase tracking-wide text-slate-600
                  shadow-sm sm:px-4 sm:py-2 sm:text-xs
                "
              >
                <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                Coding Practice
              </div>

              <h2
                className="
                  mt-3 text-2xl font-black tracking-tight text-slate-950
                  sm:text-3xl
                "
              >
                Practice Before Your{" "}
                <span
                  className="
                    bg-gradient-to-r from-sky-500 to-blue-700
                    bg-clip-text text-transparent
                  "
                >
                  Interview
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500
                  sm:text-sm sm:leading-6
                "
              >
                Solve these coding problems to strengthen your logic,
                problem-solving skills and interview preparation.
              </p>
            </motion.div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3">
              {codingPractice.map((problem, index) => (
                <motion.button
                  type="button"
                  onClick={() => handlePracticeSelect(problem)}
                  key={problem.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  className="
                    group w-full text-left rounded-2xl border border-slate-200 bg-white p-4
                    shadow-[0_10px_35px_rgba(15,23,42,0.05)]
                    transition-all duration-200
                    hover:-translate-y-1 hover:border-sky-300
                    hover:shadow-[0_15px_40px_rgba(14,165,233,0.10)]
                    sm:p-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-xl bg-sky-50 text-sky-600
                        transition group-hover:bg-sky-500 group-hover:text-white
                      "
                    >
                      <Code2 className="h-4.5 w-4.5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-black text-slate-950">
                          {problem.title}
                        </h3>

                        <span
                          className="
                            rounded-full bg-slate-100 px-2 py-0.5
                            text-[8px] font-bold text-slate-500
                            sm:text-[9px]
                          "
                        >
                          {problem.category}
                        </span>
                      </div>

                      <p
                        className="
                          mt-2 text-[10px] font-medium leading-5 text-slate-500
                          sm:text-xs sm:leading-5
                        "
                      >
                        {problem.question}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-[10px] font-bold text-sky-600">Open Problem</span>
                    <ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-600" />
                  </div>
                </motion.button>
              ))}
            </div>


            <div
              className="
                mt-6 rounded-2xl border border-sky-100 bg-sky-50/60
                px-4 py-4 text-center sm:px-6
              "
            >
              <p className="text-[10px] font-semibold leading-5 text-slate-500 sm:text-xs">
                💡 Tip: Try solving each problem yourself first, then compare
                your approach with other solutions.
              </p>
            </div>
          </section>

        </main>

        {/* FOOTER */}
        <footer
          className="
            mt-4
            border-t
            border-slate-200
            bg-white
            px-4
            py-7
            sm:px-6
            sm:py-9
          "
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
              © {new Date().getFullYear()} Devika Resources.
              All rights reserved.
            </p>

          </div>
        </footer>

      </div>
    );
  }

  /* =======================================================
     CURRENT QUIZ DATA
  ======================================================= */

  const currentQuiz = quizData[selectedTopic];

  const question = currentQuiz.questions[currentQuestion];

  const totalQuestions = currentQuiz.questions.length;

  const progress =
    ((currentQuestion + (selectedAnswer !== null ? 1 : 0)) /
      totalQuestions) *
    100;

  /* =======================================================
     RESULT SCREEN
  ======================================================= */

  if (showResult) {

    const percentage = Math.round(
      (score / totalQuestions) * 100
    );

    let resultMessage = "";

    if (percentage === 100) {
      resultMessage =
        "Perfect score! Your fundamentals are excellent. 🚀";
    } else if (percentage >= 80) {
      resultMessage =
        "Excellent work! Your concepts are looking strong. 💪";
    } else if (percentage >= 60) {
      resultMessage =
        "Good attempt! Keep practicing to strengthen your concepts. 📚";
    } else if (percentage >= 40) {
      resultMessage =
        "Nice start! A little more practice will make you stronger. 🌱";
    } else {
      resultMessage =
        "Keep learning and practicing. Every attempt helps you improve! 🚀";
    }

    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">

        {/* HEADER */}
        <header className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur-xl">

          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">

            <button
              type="button"
              onClick={handleChangeTopic}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                px-2
                py-1.5
                text-[11px]
                font-semibold
                text-slate-600
                transition
                hover:bg-sky-50
                hover:text-sky-600
                sm:gap-2
                sm:px-3
                sm:py-2
                sm:text-sm
              "
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Change Topic
            </button>

            <div className="flex items-center gap-2">

              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-gradient-to-br
                  from-sky-500
                  to-blue-700
                  text-white
                  shadow-md
                  shadow-sky-500/20
                  sm:h-9
                  sm:w-9
                "
              >
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>

              <span className="text-[11px] font-bold text-slate-900 sm:text-sm">
                {currentQuiz.title} Quiz
              </span>

            </div>

            <div className="w-6 sm:w-28" />

          </div>

        </header>

        {/* RESULT */}
        <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-14">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mx-auto max-w-lg text-center"
          >

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                sm:p-10
              "
            >

              {/* TROPHY */}
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-br
                  from-sky-400
                  to-blue-700
                  text-white
                  shadow-xl
                  shadow-sky-500/20
                "
              >
                <Trophy className="h-9 w-9" />
              </div>

              {/* LABEL */}
              <p
                className="
                  mt-6
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-sky-500
                  sm:text-xs
                "
              >
                Quiz Completed
              </p>

              <h1
                className="
                  mt-2
                  text-3xl
                  font-black
                  text-slate-950
                  sm:text-4xl
                "
              >
                Great Job! 🎉
              </h1>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                You completed the {currentQuiz.title} quiz.
              </p>

              {/* SCORE */}
              <div
                className="
                  my-7
                  rounded-2xl
                  bg-slate-50
                  p-5
                  sm:my-8
                  sm:p-7
                "
              >

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  Your Score
                </p>

                <div
                  className="
                    mt-2
                    text-5xl
                    font-black
                    text-slate-950
                    sm:text-6xl
                  "
                >
                  {score}

                  <span
                    className="
                      text-2xl
                      text-slate-400
                      sm:text-3xl
                    "
                  >
                    /{totalQuestions}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-xs
                    font-semibold
                    text-sky-600
                    sm:text-sm
                  "
                >
                  {percentage}% Score
                </p>

              </div>

              {/* MESSAGE */}
              <p
                className="
                  text-xs
                  leading-5
                  text-slate-500
                  sm:text-sm
                  sm:leading-6
                "
              >
                {resultMessage}
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8">

                {/* TRY AGAIN */}
                <button
                  type="button"
                  onClick={restartQuiz}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-slate-950
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-white
                    transition
                    hover:bg-slate-800
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  <RotateCcw className="h-4 w-4" />

                  Try Again
                </button>

                {/* CHANGE TOPIC */}
                <button
                  type="button"
                  onClick={handleChangeTopic}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-slate-700
                    transition
                    hover:bg-slate-50
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  Choose Another Topic
                </button>

                {/* RESOURCE HUB */}
                <button
                  type="button"
                  onClick={handleBackToResources}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-xs
                    font-bold
                    text-slate-500
                    transition
                    hover:bg-slate-50
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  Back to Resources
                </button>

              </div>

            </div>

          </motion.div>

        </main>

        {/* FOOTER */}
        <footer
          className="
            border-t
            border-slate-200
            bg-white
            px-4
            py-7
            sm:px-6
            sm:py-9
          "
        >
          <div className="mx-auto max-w-5xl text-center">

            <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
              © {new Date().getFullYear()} Devika Resources.
              All rights reserved.
            </p>

          </div>
        </footer>

      </div>
    );
  }

  /* =======================================================
     QUIZ SCREEN
  ======================================================= */

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <header
        className="
          sticky
          top-0
          z-[100]
          border-b
          border-slate-200
          bg-white/95
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-14
            max-w-5xl
            items-center
            justify-between
            px-4
            sm:h-16
            sm:px-6
          "
        >

          {/* CHANGE TOPIC */}
          <button
            type="button"
            onClick={handleChangeTopic}
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              px-2
              py-1.5
              text-[11px]
              font-semibold
              text-slate-600
              transition
              hover:bg-sky-50
              hover:text-sky-600
              sm:gap-2
              sm:px-3
              sm:py-2
              sm:text-sm
            "
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

            Change Topic
          </button>

          {/* TITLE */}
          <div className="flex items-center gap-2">

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-sky-500
                to-blue-700
                text-white
                shadow-md
                shadow-sky-500/20
                sm:h-9
                sm:w-9
              "
            >
              <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>

            <span
              className="
                text-[11px]
                font-bold
                text-slate-900
                sm:text-sm
              "
            >
              {currentQuiz.title} Quiz
            </span>

          </div>

          <div className="w-6 sm:w-28" />

        </div>

      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-14">

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >

          {/* QUIZ TITLE */}
          <div className="text-center">

            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-sky-200
                bg-white
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                tracking-wide
                text-sky-600
                shadow-sm
                sm:px-4
                sm:py-2
                sm:text-xs
              "
            >
              <Trophy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />

              {currentQuiz.title} Quiz
            </div>

            <h1
              className="
                mt-4
                text-3xl
                font-black
                tracking-tight
                text-slate-950
                sm:text-5xl
              "
            >
              Test Your{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-sky-500
                  to-blue-700
                  bg-clip-text
                  text-transparent
                "
              >
                Skills
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-xs
                leading-5
                text-slate-500
                sm:text-sm
                sm:leading-6
              "
            >
              {currentQuiz.description}
            </p>

          </div>

          {/* PROGRESS */}
          <div className="mt-7 sm:mt-10">

            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                text-[10px]
                font-bold
                text-slate-500
                sm:text-xs
              "
            >

              <span>
                Question {currentQuestion + 1} of {totalQuestions}
              </span>

              <span>
                {Math.round(
                  ((currentQuestion + 1) / totalQuestions) * 100
                )}
                %
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">

              <motion.div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-sky-400
                  to-blue-600
                "
                animate={{
                  width: `${progress || ((currentQuestion + 1) / totalQuestions) * 100}%`,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

            </div>

          </div>

          {/* QUESTION CARD */}
          <div
            className="
              mt-5
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-[0_12px_40px_rgba(15,23,42,0.06)]
              sm:mt-7
              sm:rounded-3xl
              sm:p-7
            "
          >

            {/* QUESTION */}
            <div className="mb-5">

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-sky-500
                  sm:text-xs
                "
              >
                Question {currentQuestion + 1}
              </span>

              <h2
                className="
                  mt-2
                  text-base
                  font-black
                  leading-6
                  text-slate-950
                  sm:text-xl
                  sm:leading-8
                "
              >
                {question.question}
              </h2>

            </div>

            {/* OPTIONS */}
            <div className="space-y-2.5 sm:space-y-3">

              {question.options.map((option, index) => {

                const isSelected =
                  selectedAnswer === index;

                const isCorrect =
                  index === question.answer;

                let optionClass =
                  "border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50";

                if (selectedAnswer !== null) {

                  if (isCorrect) {

                    optionClass =
                      "border-emerald-300 bg-emerald-50 text-emerald-700";

                  } else if (isSelected) {

                    optionClass =
                      "border-red-300 bg-red-50 text-red-700";

                  } else {

                    optionClass =
                      "border-slate-200 bg-slate-50 text-slate-400";

                  }
                }

                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      border
                      p-3
                      text-left
                      text-[11px]
                      font-semibold
                      transition-all
                      duration-200
                      sm:p-4
                      sm:text-sm
                      ${optionClass}
                    `}
                  >

                    {/* OPTION LETTER */}
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-slate-100
                        text-[10px]
                        font-black
                        text-slate-600
                        sm:h-8
                        sm:w-8
                        sm:text-xs
                      "
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    {/* OPTION */}
                    <span className="flex-1">
                      {option}
                    </span>

                    {/* CORRECT ICON */}
                    {selectedAnswer !== null &&
                      isCorrect && (
                        <CheckCircle2
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-emerald-500
                          "
                        />
                      )}

                    {/* WRONG ICON */}
                    {selectedAnswer !== null &&
                      isSelected &&
                      !isCorrect && (
                        <XCircle
                          className="
                            h-4
                            w-4
                            shrink-0
                            text-red-500
                          "
                        />
                      )}

                  </button>
                );
              })}

            </div>

            {/* FEEDBACK */}
            <AnimatePresence>

              {selectedAnswer !== null && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`
                    mt-4
                    rounded-xl
                    p-3
                    text-[10px]
                    font-semibold
                    sm:p-4
                    sm:text-xs
                    ${
                      selectedAnswer === question.answer
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-red-50 text-red-700"
                    }
                  `}
                >

                  {selectedAnswer === question.answer
                    ? "🎉 Correct answer! Great job."
                    : `The correct answer is: ${question.options[question.answer]}`}

                </motion.div>

              )}

            </AnimatePresence>

            {/* NEXT BUTTON */}
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className={`
                mt-5
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                px-4
                py-3
                text-xs
                font-bold
                transition
                sm:mt-6
                sm:py-3.5
                sm:text-sm
                ${
                  selectedAnswer !== null
                    ? "bg-slate-950 text-white hover:bg-slate-800"
                    : "cursor-not-allowed bg-slate-100 text-slate-400"
                }
              `}
            >

              {currentQuestion === totalQuestions - 1
                ? "View Result"
                : "Next Question"}

              <ArrowRight className="h-4 w-4" />

            </button>

          </div>

          {/* QUESTION COUNT */}
          <div className="mt-4 text-center">

            <p className="text-[9px] font-semibold text-slate-400 sm:text-xs">
              {totalQuestions} questions • {currentQuiz.title}
            </p>

          </div>

        </motion.div>

      </main>

      {/* FOOTER */}
      <footer
        className="
          border-t
          border-slate-200
          bg-white
          px-4
          py-7
          sm:px-6
          sm:py-9
        "
      >

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-[9px] leading-4 text-slate-400 sm:text-xs">
            © {new Date().getFullYear()} Devika Resources.
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  );
}