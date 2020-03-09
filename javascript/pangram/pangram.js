export const isPangram = sentence => {
  const result = sentence
    .toLowerCase()
    .split('')
    .sort()
    .filter((v, i, a) => a.indexOf(v) === i)
    .filter((v, i, a) => v.match(/[a-z]/))
    .join('')
  return result === 'abcdefghijklmnopqrstuvwxyz'
}
