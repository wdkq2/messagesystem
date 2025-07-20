export async function callOpenAI(prompt: string): Promise<string> {
  const resp = await fetch(import.meta.env.VITE_OPENAI_PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  })

  if (!resp.ok) {
    throw new Error('Request failed')
  }

  const data = await resp.json()
  return data.message as string
}
