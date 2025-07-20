interface Props {
  text: string
}

export default function OutputPane({ text }: Props) {
  return (
    <pre className="bg-white p-4 rounded shadow whitespace-pre-wrap min-h-[6rem]">
      {text}
    </pre>
  )
}
