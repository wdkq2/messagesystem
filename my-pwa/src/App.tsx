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
    const base =
      '당신은 부동산 업자를 위해서 문자를 작성해주는 전문 글 작성자 입니다. 사용자는 부동산 이슈와 어떻게 글을 작성하면 될지 짧은 지침을 제공할 것입니다. 문자 메시지를 작성하고 제공하세요. 사용자는 복사-붙여넣기만 하면 되도록 다른 텍스트는 모두 배제하고 오직 문자 메시지만 제공하세요.'
    const fullPrompt = `${base}\n#부동산 이슈 ${chosen}\n# 짧은 지침 ${prompt}`
    console.log(fullPrompt)
    try {
      setOutput('작성 중입니다...')
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
