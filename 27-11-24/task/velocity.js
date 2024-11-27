import { input } from "../../function.js"

(async () => {
    const velocity = await input('ป้อนความเร็ว : ')
    if (velocity > 120) console.log("ปรับ 1,000 บาท")
    else if (velocity > 80) console.log("ปรับ 500 บาท")
    else console.log('ไม่มีการปรับเงิน')
})()