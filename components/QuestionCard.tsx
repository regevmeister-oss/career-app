export default function QuestionCard({ question, options, onSelect }) {
  return (
    <div className="space-y-8 text-center text-white">
      <h2 className="text-4xl font-light">{question}</h2>

      <div className="grid grid-cols-2 gap-6 mt-10">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-xl p-8 rounded-full transition-all duration-300 hover:scale-105"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
