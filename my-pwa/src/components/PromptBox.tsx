interface Props {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export default function PromptBox({ value, onChange, onSubmit }: Props) {
  return (
    <div>
      <textarea
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}
