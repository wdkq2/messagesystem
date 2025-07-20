import { useState } from 'react'

interface Props {
  text: string
}

export default function OutputPane({ text }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <>
      {copied && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black text-white px-4 py-2 rounded">복사되었습니다!</div>
        </div>
      )}
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
    </>
  )
}
