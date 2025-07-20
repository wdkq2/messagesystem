import { useState } from 'react'
import { Issue } from '../hooks/useIssues'

interface Props {
  issues: Issue[]
  onAdd: (title: string, content: string) => void
  onUpdate: (issue: Issue) => void
}

export default function IssueEditor({ issues, onAdd, onUpdate }: Props) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleAdd = () => {
    if (!title.trim()) return
    onAdd(title, content)
    setTitle('')
    setContent('')
  }

  return (
    <div>
      <h3>이슈 관리</h3>
      <div>
        <input
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows={2}
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleAdd}>추가</button>
      </div>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id} style={{ marginTop: '0.5em' }}>
            <input
              value={issue.title}
              onChange={(e) =>
                onUpdate({ ...issue, title: e.target.value })
              }
            />
            <textarea
              rows={2}
              value={issue.content}
              onChange={(e) =>
                onUpdate({ ...issue, content: e.target.value })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
