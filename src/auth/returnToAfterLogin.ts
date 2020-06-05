// запоминание, куда вернуться после авторизации
export const STORAGE_KEY = 'AfterLogin'
//
export function rememberReturnTo(returnTo: string): void {
    localStorage.setItem(STORAGE_KEY, returnTo)
}

export function recallReturnTo(): string | null {
    return localStorage.getItem(STORAGE_KEY)
}

export function forgetReturnTo(): void {
    localStorage.removeItem(STORAGE_KEY)
}