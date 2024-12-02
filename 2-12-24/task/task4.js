import { input } from "../../function.js"

(async () => {
    const [N, K] = (await input("กรอกจำนวน N และ K (คั่นด้วยเว้นวรรค)\n>> ")).split(" ").map(Number)
    const votes = (await input("กรอกโหวต (คั่นด้วยเว้นวรรค)\n>> ")).split(" ").map(Number)
    if (votes.length !== K) {
        console.log(`จำนวนผู้โหวต กับคนที่โหวต ไม่สัมพันธ์กัน\nจำนวนผู้โหวต: ${K} คน และมีผลโหวต ${votes.length} ผลโหวต ซึ่งไม่เท่ากัน!`)
        return
    }
    const count = Array(N + 1).fill(0)
    votes.forEach((vote) => count[vote]++)

    let maxVotes = 0
    let winner = 0

    for (let i = 1; i <= N; i++) {
        if (count[i] > maxVotes) {
            maxVotes = count[i]
            winner = i
        }
    }

    console.log(`\nผู้ชนะคือหมายเลข ${winner}\nโดยมีผลโหวตทั้งหมด ${maxVotes} โหวต`)
})()