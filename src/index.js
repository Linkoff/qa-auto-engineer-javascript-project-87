import { readFileSync } from 'fs'
import { extname } from 'path'

const parseFile = (filepath) => {
  const content = readFileSync(filepath, 'utf-8')
  const ext = extname(filepath).slice(1)

  if (ext === 'json') {
    return JSON.parse(content)
  }
  // позже добавим yaml, пока только json
  throw new Error(`Unsupported file format: ${ext}`)
}

export default function genDiff(filepath1, filepath2) {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)

  return { data1, data2 }
}
