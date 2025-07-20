interface Props {
  text: string
}

export default function OutputPane({ text }: Props) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="relative">
      <button
        className="absolute right-2 top-2 px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        onClick={handleCopy}
      >
        복사
      </button>
      <pre className="bg-white p-6 rounded-lg shadow whitespace-pre-wrap min-h-[6rem] text-gray-800">
        {text}
      </pre>
    </div>
  )
}
