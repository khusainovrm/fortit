export default function numberFilter (value) {
  // for formating numbers (example: 123456 => 123.45K)

  return `${(value / 1000).toFixed(2)}K`
}
