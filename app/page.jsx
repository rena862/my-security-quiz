import quizData from "../data/quiz.json";
import QuizCard from "../components/QuizCard";

export default function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">クイズに挑戦しよう！</h2>
      {quizData.map((q, i) => (
        <QuizCard key={i} {...q} />
      ))}
    </div>
  );
}
