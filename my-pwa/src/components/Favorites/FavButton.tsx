import { FavoriteItem, useFavorites } from '../../hooks/useFavorites'

interface Props {
  item: FavoriteItem
}

export default function FavButton({ item }: Props) {
  const { add } = useFavorites()
  return (
    <button
      className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400 text-white font-semibold"

      onClick={() => add(item)}
    >
      ★ 저장
    </button>
  )
}
