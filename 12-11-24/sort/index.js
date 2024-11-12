import { input } from "../../function.js"

(async () => {
    const list = []
    let len = await input(`กรอกรอบในการป้อนตัวเลข: `)

    len = parseInt(len)
    while (list.length < len) {
        var e = await input(`ป้อนตัวเลขที่ ${list.length}/${len}: `)
        list.push(e)
    }

    console.log(`
มีตัวเลขทั้งหมด ${len}
โดยมี ${list.join(' ')}
เรียงได้เป็น ${list.map(Number).sort((a, b) => a - b).join(' ')}
    `)
})()