import issues from '../data/issueList.json'

interface Props {
  selected: number[]
  toggle: (id: number) => void
}

export default function IssueSelector({ selected, toggle }: Props) {
  return (
    <div>
      {issues.map((issue) => (
        <label key={issue.id} style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={selected.includes(issue.id)}
            onChange={() => toggle(issue.id)}
          />
          {issue.title}
        </label>
      ))}
    </div>
  )
}
