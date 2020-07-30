export default function numberFilter (value) {
  return `${(value / 1000000).toFixed(2)}K`
}
