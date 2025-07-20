interface Props {
  text: string
}

export default function OutputPane({ text }: Props) {
  return (
    <pre className="bg-white p-6 rounded-lg shadow whitespace-pre-wrap min-h-[6rem] text-gray-800">

      {text}
    </pre>
  )
}
