import QuizCard from "@/components/cards/all-quiz-card";

const quizes = [
  {
    questionId: 1,
    question: "What is a stack and give an example?",
    answer:
      " A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor1:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor2:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor3:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."
  },
  {
    questionId: 2,
    question: "What is a stack and give an example?",
    answer:
      " A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor1:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor2:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor3:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."
  },
  {
    questionId: 3,
    question: "What is a stack and give an example?",
    answer:
      " A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor1:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor2:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language.",
    distractor3:
      "A stack is a Last In, First Out (LIFO) data structure. Example: managing function calls in a programming language."
  }
];

const FlaggedQuiz = () => {
  return (
    <div className="p-4 px-6">
      <div className="mb-8">
        <p className="font-semibold	text-lg">
          Foundations of Computing: Data Structures, Algorithms, and Operating Systems
        </p>
        <h2 className="font-semibold text-4xl">Flagged Quizzes</h2>
      </div>
      <div>
        {quizes.map((quiz) => (
          <QuizCard
            key={quiz.questionId}
            questionId={quiz.questionId}
            question={quiz.question}
            answer={quiz.answer}
            distractor1={quiz.distractor1}
            distractor2={quiz.distractor2}
            distractor3={quiz.distractor3}
          />
        ))}
      </div>
    </div>
  );
};

export default FlaggedQuiz;
