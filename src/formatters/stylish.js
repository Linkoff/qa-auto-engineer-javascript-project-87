export default function stylish(diff) {
  const lines = diff.map((node) => {
    const { key, status, oldValue, newValue } = node

    switch (status) {
      case 'added':
        return `+ ${key}: ${newValue}`
      case 'removed':
        return `- ${key}: ${oldValue}`
      case 'unchanged':
        return `  ${key}: ${oldValue}`
      case 'changed':
        return [`- ${key}: ${oldValue}`, `+ ${key}: ${newValue}`]
    }
  })

  const flatLines = lines.flat()

  return `{\n${flatLines.join('\n')}\n}`
}
