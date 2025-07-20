import { useFavorites } from '../../hooks/useFavorites'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'


interface Props {
  onClose: () => void
}
export default function FavList({ onClose }: Props) {
  const { items, updateName } = useFavorites()
  const [query, setQuery] = useState('')
  const filtered = items.filter((it) =>
    it.name.toLowerCase().includes(query.toLowerCase()),
  )

  // prevent page scrolling while the modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  const modal = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg">

        <div className="flex gap-2 mb-3">
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
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
