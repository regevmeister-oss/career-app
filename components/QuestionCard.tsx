type Props = {
  question: string;
  options: string[];
  onSelect: (value: string) => void;
};

export default function QuestionCard({ question, options, onSelect }: Props) {
  return (
    <div>
      <h2>{question}</h2>

      {options.map((opt: string) => (
        <button key={opt} onClick={() => onSelect(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}


