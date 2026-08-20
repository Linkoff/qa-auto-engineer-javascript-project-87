import { describe, it, expect } from 'vitest'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getFixturePath = (filename) => {
  return path.join(__dirname, '..', '__fixtures__', filename)
}

describe('genDiff for flat JSON files, format stylish', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.json'),
      getFixturePath('file4.json'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.json'),
      getFixturePath('file6.json'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.json'),
      getFixturePath('empty2.json'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

describe('genDiff for flat yaml files, format stylish', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.yml'),
      getFixturePath('file2.yml'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.yml'),
      getFixturePath('file4.yml'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.yml'),
      getFixturePath('file6.yml'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.yml'),
      getFixturePath('empty2.yml'),
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_stylish4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

describe('genDiff for flat JSON files, format plain', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.json'),
      getFixturePath('file4.json'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.json'),
      getFixturePath('file6.json'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.json'),
      getFixturePath('empty2.json'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect change when null value is replaced with a non‑null value', () => {
    const result = genDiff(
      getFixturePath('file7.json'),
      getFixturePath('file8.json'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain_null.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

describe('genDiff for flat yaml files, format plain', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.yml'),
      getFixturePath('file2.yml'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.yml'),
      getFixturePath('file4.yml'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.yml'),
      getFixturePath('file6.yml'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.yml'),
      getFixturePath('empty2.yml'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect change when null value is replaced with a non‑null value', () => {
    const result = genDiff(
      getFixturePath('file7.yml'),
      getFixturePath('file8.yml'),
      'plain',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_plain_null.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

describe('genDiff for flat JSON files, format json', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.json'),
      getFixturePath('file2.json'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.json'),
      getFixturePath('file4.json'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.json'),
      getFixturePath('file6.json'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.json'),
      getFixturePath('empty2.json'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

describe('genDiff for flat yaml files, format json', () => {
  it('should return unchanged keys for identical files', () => {
    const result = genDiff(
      getFixturePath('file1.yml'),
      getFixturePath('file2.yml'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json1.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case with one added and one removed key', () => {
    const result = genDiff(
      getFixturePath('file3.yml'),
      getFixturePath('file4.yml'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json2.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should detect changed value for existing key', () => {
    const result = genDiff(
      getFixturePath('file5.yml'),
      getFixturePath('file6.yml'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json3.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })

  it('should handle case where both input files are empty', () => {
    const result = genDiff(
      getFixturePath('empty1.yml'),
      getFixturePath('empty2.yml'),
      'json',
    )

    const expected = fs.readFileSync(
      getFixturePath('expected_json4.txt'),
      'utf-8',
    )

    expect(result).toBe(expected)
  })
})

it('should throw error for unsupported file format', () => {
  const filepath = getFixturePath('unsupported.txt')
  expect(() => genDiff(filepath, filepath)).toThrow('Unsupported file format')
})
