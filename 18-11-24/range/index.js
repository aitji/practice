import { input } from "../../function.js"

(async () => {
    const N = parseInt(await input("ป้อนจำนวนของภูเขา: "))

    var mountain = []
    for (let i = 0; i < N; i++) {
        const [L, R] = await input(`กรอกขอบเขตของภูเขาซ้ายและขวาของภูเขาลูกที่ ${i + 1}/${N}: `).split(' ').map(Number)
        mountain.push([L,R])
    }

    /** sorter */
    const scores = new Array(N).fill(1)
    mountain.sort((a,b) => a[0] - b[0] || b[1] - a[1])
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < i; j++) {
            
        }
    }
})()