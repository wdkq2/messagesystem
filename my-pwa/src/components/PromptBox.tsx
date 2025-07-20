interface Props {
  value: string
  onChange: (v: string) => void
  onSubmit: () => void
}

export default function PromptBox({ value, onChange, onSubmit }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-3">
      <textarea
        className="border p-3 rounded min-h-[6rem] focus:outline-blue-500"
        rows={4}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className="self-start px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  )
}
