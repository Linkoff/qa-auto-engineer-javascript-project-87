import { readFileSync } from 'fs'
import { extname } from 'path'
import { load } from 'js-yaml'

const parseFile = (filepath) => {
  const content = readFileSync(filepath, 'utf-8')
  const ext = extname(filepath).slice(1)

  if (ext === 'json') {
    return JSON.parse(content)
  }
  if (ext === 'yml' || ext === 'yaml') {
    return load(content)
  }
  throw new Error(`Unsupported file format: ${ext}`)
}

export default parseFile
