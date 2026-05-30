export const COOKIE_NAME = 'admin_session'

async function hmac(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message))
  return Array.from(new Uint8Array(sig))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export async function createSessionToken(): Promise<string> {
  return hmac(process.env.ADMIN_SECRET ?? '', 'admin-session-v1')
}

export async function verifySessionToken(token: string): Promise<boolean> {
  const expected = await createSessionToken()
  if (token.length !== expected.length) return false
  // constant-time comparison to prevent timing attacks
  let diff = 0
  for (let i = 0; i < token.length; i++) {
    diff |= token.charCodeAt(i) ^ expected.charCodeAt(i)
  }
  return diff === 0
}
