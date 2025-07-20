interface Props {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export default function PromptBox({ value, onChange, onSubmit }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col gap-2">
      <textarea
        className="border p-2 rounded min-h-[6rem]"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="self-start px-3 py-1 rounded bg-green-600 text-white"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  )
}
