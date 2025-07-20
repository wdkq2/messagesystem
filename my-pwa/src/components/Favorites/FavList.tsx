import { useFavorites } from '../../hooks/useFavorites'
import { useState } from 'react'


interface Props {
  onClose: () => void
}
export default function FavList({ onClose }: Props) {
  const { items, updateName } = useFavorites()
  const [query, setQuery] = useState('')
  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(query.toLowerCase()),
  )

  return (
    <aside className="bg-white p-4 rounded-lg shadow w-64 h-full overflow-y-auto space-y-3">
      <div className="flex gap-2">
        <input
          className="border p-1 flex-grow rounded"
          placeholder="검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="px-2 text-sm bg-gray-200 rounded"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">저장된 멘트가 없습니다.</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((it) => (
            <li key={it.id} className="border-b pb-3 last:border-b-0">
              <input
                className="border p-1 w-full rounded mb-1"
                value={it.name}
                onChange={(e) => updateName(it.id, e.target.value)}
              />
              <pre className="whitespace-pre-wrap text-sm text-gray-700">
                {it.content}
              </pre>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )

}
