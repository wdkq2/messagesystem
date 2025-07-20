import { useFavorites } from '../../hooks/useFavorites'

export default function FavList() {
  const { items } = useFavorites()
  return (
    <ul className="bg-white p-6 rounded-lg shadow space-y-3 max-h-60 overflow-y-auto">
      {items.map((it) => (
        <li key={it.id} className="border-b pb-3 last:border-b-0">
          <h4 className="font-semibold">{it.title}</h4>
          <pre className="whitespace-pre-wrap text-sm text-gray-700">
            {it.content}
          </pre>
        </li>
      ))}
    </ul>
  )
}
