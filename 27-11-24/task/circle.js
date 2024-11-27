import { input } from "../../function.js"

(async () => {
    const r = await input('กรอกรัศมีวงกลม: ')
    const area = Math.PI * Math.pow(r, 2)
    console.log(`พื้นที่วงกลมคือ ${area.toFixed(2)}`)
})()