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
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">이슈 관리</h3>
      <div className="flex flex-col gap-3 mb-4">

        <input
          className="border p-2 rounded"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 rounded"
          rows={2}
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="self-start px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold"

          onClick={handleAdd}
        >
          추가
        </button>
      </div>
      <ul className="space-y-2">
        {issues.map((issue) => (
          <li key={issue.id} className="flex flex-col gap-1">
            <input
              className="border p-1 rounded"
              value={issue.title}
              onChange={(e) =>
                onUpdate({ ...issue, title: e.target.value })
              }
            />
            <textarea
              className="border p-1 rounded"
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
