import parseFile from './parsers.js'
import stylish from './formatters/stylish.js'

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const allKeys = new Set([...keys1, ...keys2])
  const sortedKeys = Array.from(allKeys).sort()

  const getStatus = (key, obj1, obj2) => {
    if (!(key in obj1) && key in obj2) return 'added'
    if (key in obj2) {
      return obj1[key] === obj2[key] ? 'unchanged' : 'changed'
    }
    return 'removed'
  }

  return sortedKeys.map((key) => ({
    key,
    status: getStatus(key, data1, data2),
    oldValue: data1[key],
    newValue: data2[key],
  }))
}

export default function genDiff(filepath1, filepath2) {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)
  const diff = buildDiff(data1, data2)
  return stylish(diff)
}
