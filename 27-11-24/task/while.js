var answer = []
for (let i = 0; i < 115; i++) answer.push(`${i}:${i * 45}`)
console.log(`มีทั้งหมด ${answer.length} คู่ได้แก่\n${answer.join(' | ')}`)