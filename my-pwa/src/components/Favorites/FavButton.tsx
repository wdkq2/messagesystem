import { FavoriteItem, useFavorites } from '../../hooks/useFavorites'

interface Props {
  item: FavoriteItem
}

export default function FavButton({ item }: Props) {
  const { add } = useFavorites()
  return <button onClick={() => add(item)}>★</button>
}
