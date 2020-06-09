export interface AuthToken {
  access_token: string
}

const TOKEN = 'AccessToken'

export function readToken(): AuthToken | null {
  const stored = localStorage.getItem(TOKEN)
  if (stored) {
    return JSON.parse(stored) as AuthToken
  } else {
    return null
  }
}

export function writeToken(token: AuthToken): void {
  localStorage.setItem(TOKEN, JSON.stringify(token))
}

export function deleteToken(): void {
  localStorage.removeItem(TOKEN)
}


export function hasToken(): boolean {
  return !!localStorage.getItem(TOKEN)
}
