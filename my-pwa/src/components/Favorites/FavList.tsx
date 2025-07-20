import { useFavorites } from '../../hooks/useFavorites'

export default function FavList() {
  const { items } = useFavorites()
  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>{it.title}</li>
      ))}
    </ul>
  )
}
