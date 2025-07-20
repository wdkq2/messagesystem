import { useFavorites } from '../../hooks/useFavorites'

export default function FavList() {
  const { items } = useFavorites()
  return (
    <ul className="bg-white p-4 rounded shadow space-y-1">

      {items.map((it) => (
        <li key={it.id}>{it.title}</li>
      ))}
    </ul>
  )
}
