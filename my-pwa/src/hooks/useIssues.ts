import localforage from 'localforage'
import { useEffect, useState } from 'react'

export interface Issue {
  id: number
  title: string
  content: string
}

const store = localforage.createInstance({ name: 'issues' })

export function useIssues() {
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    store.getItem<Issue[]>('list').then(async (list) => {
      if (list && list.length) {
        setIssues(list)
      } else {
        const data = (await import('../data/issueList.json')).default as Issue[]
        setIssues(data)
        store.setItem('list', data)
      }
    })
  }, [])

  const addIssue = (title: string, content: string) => {
    const newIssue: Issue = { id: Date.now(), title, content }
    const next = [...issues, newIssue]
    setIssues(next)
    store.setItem('list', next)
  }

  const updateIssue = (updated: Issue) => {
    const next = issues.map((it) => (it.id === updated.id ? updated : it))
    setIssues(next)
    store.setItem('list', next)
  }

  return { issues, addIssue, updateIssue }
}
