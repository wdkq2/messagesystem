import { useState } from 'react'
import IssueSelector from './components/IssueSelector'
import PromptBox from './components/PromptBox'
import OutputPane from './components/OutputPane'
import FavButton from './components/Favorites/FavButton'
import { FavoriteItem } from './hooks/useFavorites'
import issues from './data/issueList.json'
import { callOpenAI } from './api/openaiProxy'

export default function App() {
  const [selected, setSelected] = useState<number[]>([])
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('')

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
    <div>
      <IssueSelector selected={selected} toggle={toggle} />
      <PromptBox value={prompt} onChange={setPrompt} onSubmit={handleSubmit} />
      <OutputPane text={output} />
      <FavButton item={favItem} />
    </div>
  )
}
