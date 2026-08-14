import { readFileSync } from 'fs'
import { extname } from 'path'

const parseFile = (filepath) => {
  const content = readFileSync(filepath, 'utf-8')
  const ext = extname(filepath).slice(1)

  if (ext === 'json') {
    return JSON.parse(content)
  }
  throw new Error(`Unsupported file format: ${ext}`)
}

export default function genDiff(filepath1, filepath2) {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  const key1 = Object.keys(data1)
  const key2 = Object.keys(data2)
  const set = new Set([...key1, ...key2])
  const sortedKeys = Array.from(set).sort()
  const getStatus = (key, obj1, obj2) => {
    if (!(key in obj1) && key in obj2) {
      return 'added'
    }
    if (key in obj2) {
      return obj1[key] === obj2[key] ? 'unchanged' : 'changed'
    }
    return 'removed'
  }
  const lines = sortedKeys.map((key) => {
    const status = getStatus(key, data1, data2)
    switch (status) {
      case 'added':
        return `+ ${key}: ${data2[key]}`
      case 'removed':
        return `- ${key}: ${data1[key]}`
      case 'unchanged':
        return `  ${key}: ${data1[key]}`
      case 'changed':
        return [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`]
    }
  })
  const result = lines.flat()
  return `{\n${result.join('\n')}\n}`
}
