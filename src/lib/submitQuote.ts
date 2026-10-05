export type QuotePayload = {
  fullName: string
  phone: string
  email: string
  service: string
  location: string
  budget: string
  details: string
  honeypot?: string
}

export async function submitQuote(payload: QuotePayload) {
  if (payload.honeypot) return { ok: true, skipped: true }
  const endpoint = import.meta.env.VITE_QUOTE_ENDPOINT
  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok)
      throw new Error('We could not send your request. Please try WhatsApp instead.')
    return { ok: true, skipped: false }
  }
  const message = [
    'Hello BuildTech, I would like to request a quote.',
    `Name: ${payload.fullName}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Service: ${payload.service}`,
    `Project location: ${payload.location}`,
    `Budget range: ${payload.budget}`,
    `Project details: ${payload.details}`,
  ].join('\n')
  window.open(
    `https://wa.me/233248129308?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener,noreferrer',
  )
  return { ok: true, skipped: false }
}
