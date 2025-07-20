import { Issue } from '../hooks/useIssues'

interface Props {
  issues: Issue[]
  selected: number[]
  toggle: (id: number) => void
}

export default function IssueSelector({ issues, selected, toggle }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow grid gap-2">
      {issues.map((issue) => (
        <label key={issue.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={selected.includes(issue.id)}
            onChange={() => toggle(issue.id)}
          />
          <span>{issue.title}</span>
        </label>
      ))}
    </div>
  )
}
