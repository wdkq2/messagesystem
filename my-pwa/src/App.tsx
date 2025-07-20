import { useState } from 'react'
import IssueSelector from './components/IssueSelector'
import PromptBox from './components/PromptBox'
import OutputPane from './components/OutputPane'
import FavButton from './components/Favorites/FavButton'
import IssueEditor from './components/IssueEditor'
import { FavoriteItem } from './hooks/useFavorites'
import { useIssues } from './hooks/useIssues'
import { callOpenAI } from './api/openaiProxy'

export default function App() {
  const [selected, setSelected] = useState<number[]>([])
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')
  const [editing, setEditing] = useState(false)
  const { issues, addIssue, updateIssue } = useIssues()

  const toggle = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  const handleSubmit = async () => {
    const chosen = issues
      .filter((i) => selected.includes(i.id))
      .map((i) => i.content)
      .join('\n')
    const fullPrompt = `${chosen}\n${prompt}`
    console.log(fullPrompt)
    try {
      const message = await callOpenAI(fullPrompt)
      setOutput(message)
    } catch (e) {
      console.error(e)
    }
  }

  const favItem: FavoriteItem = {
    id: Date.now(),
    title: prompt,
    content: output,
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MessageSystem</h1>
        <button
          className="px-3 py-1 rounded bg-blue-600 text-white"
          onClick={() => setEditing(!editing)}
        >
          {editing ? '닫기' : '이슈 편집'}
        </button>
      </header>

      {editing && (
        <IssueEditor issues={issues} onAdd={addIssue} onUpdate={updateIssue} />
      )}
      <IssueSelector issues={issues} selected={selected} toggle={toggle} />
      <PromptBox value={prompt} onChange={setPrompt} onSubmit={handleSubmit} />
      <OutputPane text={output} />
      <div className="text-right">
        <FavButton item={favItem} />
      </div>

    </div>
  )
}
