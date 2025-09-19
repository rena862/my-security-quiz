export default function QuizCard({ quiz }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="font-bold text-lg mb-2">{quiz.question}</h2>
      <ul className="list-disc list-inside">
        {quiz.options.map((option, idx) => (
          <li key={idx}>{option}</li>
        ))}
      </ul>
    </div>
  );
}
