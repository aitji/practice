import { input } from "../../function.js"

(async () => {
    const hour = 8
    const all = await input('กรอกจำนวนวัตต์ของเครื่องใช้ไฟฟ้า 3 อย่างในรูป (1 2 3) : ')
    const [x,y,z] = all.split(" ").map(Number)
    const f = await input('อัตราไฟฟ้าต่อหน่อย: ') || 0
    const total = ((((x * hour) + (y * hour) + (z * hour)) / 1000) * f) * 30
    console.log(`บ้านของฉันจ่ายค่าไฟฟ้า ${total} บาท`)
})()