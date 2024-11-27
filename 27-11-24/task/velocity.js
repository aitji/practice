import { input } from "../../function.js"

(async () => {
    const veclocity = await input('ป้อนความเร็ว : ')
    if (veclocity > 120) console.log("ปรับ 1,000 บาท")
    else if (veclocity > 80) console.log("ปรับ 500 บาท")
    else console.log('ไม่มีการปรับเงิน')
})()