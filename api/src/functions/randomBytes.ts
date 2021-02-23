const randomBytes = (): string => {
  const len = Math.floor(Math.random() * (40 - 10 + 1) + 10)
  const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let str: string = ''
  for (let i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return str
}

export default randomBytes
