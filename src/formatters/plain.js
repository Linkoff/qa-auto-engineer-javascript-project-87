const formatValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`
  }
  return value
}

export default function plain(diff) {
  const lines = diff
    .filter((node) => node.status !== 'unchanged')
    .map((node) => {
      const { key, status, oldValue, newValue } = node

      switch (status) {
        case 'added':
          return `Property '${key}' was added with value: ${formatValue(newValue)}`
        case 'removed':
          return `Property '${key}' was removed`
        case 'changed':
          return `Property '${key}' was updated. From ${formatValue(oldValue)} to ${formatValue(newValue)}`
      }
    })

  return lines.join('\n')
}
