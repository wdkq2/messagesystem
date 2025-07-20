import localforage from 'localforage'
import { useEffect, useState } from 'react'

export interface FavoriteItem {
  id: number
  name: string

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
  const add = (content: string) => {
    const nextNum = items.length + 1
    const item: FavoriteItem = {
      id: Date.now(),
      name: `저장-${nextNum}`,
      content,
    }
    const next = [...items, item]
    setItems(next)
    store.setItem('list', next)
  }

  const updateName = (id: number, name: string) => {
    const next = items.map((it) => (it.id === id ? { ...it, name } : it))
    setItems(next)
    store.setItem('list', next)
  }

  return { items, add, updateName }
}
