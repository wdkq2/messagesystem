import { FavoriteItem, useFavorites } from '../../hooks/useFavorites'

interface Props {
  item: FavoriteItem
}

export default function FavButton({ item }: Props) {
  const { add } = useFavorites()
  return (
    <button
      className="px-3 py-1 rounded bg-yellow-400 hover:bg-yellow-300"
      onClick={() => add(item)}
    >
      ★ 저장
    </button>
  )
}
