// run with node this file to generate data.json for Chart-diagram

function randomInteger (min, max) {
  const rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

export default function generateData () {
  const data = { sellsGlobal: [] }

  // Create 90 projects
  for (let i = 0; i < 90; i++) {
    const statusInteger = randomInteger(1, 3)

    const status = statusInteger === 1 ? 'next' : statusInteger === 2 ? 'current' : 'done'

    data.sellsGlobal.push({ id: i, name: `project${i}`, sells: [], status })
  }

  // Generate sells for project per day (21 working days per mounth)
  for (let day = 0; day < 12 * 21; day++) {
    for (let month = 1; month < 13; month++) {
      if (day < month * 21) {
        const typeInteger = randomInteger(1, 3)
        const type = typeInteger === 1 ? 'orders' : typeInteger === 2 ? 'sale' : 'online'
        data.sellsGlobal.forEach(project => project.sells.push({ month, day: day + 1, sold: randomInteger(500, 1000), type }))
      }
    }
  }
  return data
}
