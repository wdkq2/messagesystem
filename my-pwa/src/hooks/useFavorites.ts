import localforage from 'localforage'
import { useEffect, useState } from 'react'

export interface FavoriteItem {
  id: number
  title: string
  content: string
}

const store = localforage.createInstance({ name: 'favorites' })

export function useFavorites() {
  const [items, setItems] = useState<FavoriteItem[]>([])

  useEffect(() => {
    store.getItem<FavoriteItem[]>('list').then((list) => {
      if (list) setItems(list)
    })
  }, [])

  const add = (item: FavoriteItem) => {
    const next = [...items, item]
    setItems(next)
    store.setItem('list', next)
  }

  return { items, add }
}
