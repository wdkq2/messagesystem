interface Props {
  text: string
}

export default function OutputPane({ text }: Props) {
  return (
    <pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre>
  )
}
