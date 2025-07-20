import { useFavorites } from '../../hooks/useFavorites'
import { useState } from 'react'

interface Props {
  content: string
}

export default function FavButton({ content }: Props) {
  const { add } = useFavorites()
  const [show, setShow] = useState(false)

  const handleClick = () => {
    add(content)
    setShow(true)
    setTimeout(() => setShow(false), 1500)
  }

  return (
    <>
      <button
        className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400 text-white font-semibold"
        onClick={handleClick}
      >
        ★ 저장
      </button>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black text-white px-4 py-2 rounded">저장되었습니다!</div>
        </div>
      )}
    </>
  )
}
