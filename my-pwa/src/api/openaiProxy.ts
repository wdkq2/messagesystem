export async function callOpenAI(prompt: string): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_KEY
  const model = import.meta.env.VITE_OPENAI_MODEL ?? 'gpt-4o'

  const resp = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
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
