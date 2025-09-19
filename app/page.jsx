import quizData from "../data/quiz.json";
import QuizCard from "../components/QuizCard";

export default function HomePage() {
  return (
    <div className="p-6">
      <p className="text-lg text-center mb-4">ようこそ！セキュリティクイズへ。</p>
      <div className="grid gap-4">
        {quizData.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}
