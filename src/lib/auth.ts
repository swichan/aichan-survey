export const COOKIE_NAME = 'admin_session'

export function getExpectedToken(password: string): string {
  return btoa(`${password}:aichan-admin`)
}
