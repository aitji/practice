import { input } from "../../function.js"

(async() => {
    const listen_time = await input("เวลาที่ฟังเพลง: ")
    if (listen_time > 4) console.log('อันตรายต่อหู')
    else console.log('ขอให้มีความสุขกับการฟังเพลง')
})()