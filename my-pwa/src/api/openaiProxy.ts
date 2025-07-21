export async function callOpenAI(prompt: string): Promise<string> {
  const url = import.meta.env.VITE_OPENAI_PROXY_URL
  const model = import.meta.env.VITE_OPENAI_MODEL ?? 'gpt-4o'

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  if (!resp.ok) {
    const error = await resp.text()
    throw new Error(error)
  }

  const data = await resp.json()
  return data.choices?.[0]?.message?.content || ''
}
