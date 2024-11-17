import { input } from "../../function.js"

(async () => {
    console.log('มีผลไม้ | ชนิดยาพิษ')
    /** note: N=fruit, S=poison */
    const [N, S] = (await input()).split(' ').map(Number)

    console.log(`มีผลไม้ ${N} ผล | ชนิดยาพิษ ${S} ชนิด\n`)
    const weights = []
    const poisons = []

    console.log("ผลไม้ชิ้นที่ น้ำหนัก [-1: มียาพิษชนิดนั้น, 0: ไม่มียาพิษและไม่มียาถอน, 1: มียาพิษชนิดนั้น]")
    for (let i = 0; i < N; i++) {
        const line = (await input()).split(' ').map(Number)
        weights[i] = line[0]
        poisons[i] = line.slice(1)
    }

    function findMinCure(startFruit) {
        /** poisons from first fruit */
        const initialPoisons = new Set()
        for (let j = 0; j < S; j++) if (poisons[startFruit][j] === -1) initialPoisons.add(j)

        /** no poisons, at start fruits */
        if (initialPoisons.size === 0) return 0

        const queue = [{
            poisons: initialPoisons,
            weightSum: 0,
            eaten: new Set()
        }]

        let minWeight = Infinity

        while (queue.length > 0) {
            const current = queue.shift()

            /** no poisons & update min */
            if (current.poisons.size === 0) {
                minWeight = Math.min(minWeight, current.weightSum)
                continue
            }

            /** try remaining fruits */
            for (let i = 0; i < N; i++) {
                if (i === startFruit || current.eaten.has(i)) continue

                /** check fruit can HELP */
                let helps = false
                for (const poison of current.poisons) {
                    if (poisons[i][poison] === 1) {
                        helps = true
                        break
                    }
                }

                if (!helps) continue

                /** cal pos after eat */
                const newPoisons = new Set(current.poisons)

                /** remove poison */
                for (const poison of current.poisons) {
                    if (poisons[i][poison] === 1) {
                        newPoisons.delete(poison)
                    }
                }

                /** add new pos */
                for (let j = 0; j < S; j++) if (poisons[i][j] === -1) newPoisons.add(j)

                /** state to queue */
                const newEaten = new Set(current.eaten)
                newEaten.add(i)

                queue.push({
                    poisons: newPoisons,
                    weightSum: current.weightSum + weights[i],
                    eaten: newEaten
                })
            }
        }

        return minWeight === Infinity ? -1 : minWeight
    }

    /** find max */
    let maxMinWeight = 0
    let hasPoison = false

    /** try each fruit as (start fruit) */
    for (let i = 0; i < N; i++) {
        /** check poison for each fruit */
        let hasAnyPoison = false
        for (let j = 0; j < S; j++) {
            if (poisons[i][j] === -1) {
                hasAnyPoison = true
                hasPoison = true
                break
            }
        }

        if (!hasAnyPoison) continue

        const minWeight = findMinCure(i)
        if (minWeight !== -1) maxMinWeight = Math.max(maxMinWeight, minWeight)
    }

    console.log(`\nผลลัพธ์: ${hasPoison ? maxMinWeight : 0}`)
})()