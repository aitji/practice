import { input } from "../../function.js"

(async () => {
    const price = {
        1: { 1: 100, 2: 120, 3: 300 },
        2: { 1: 100, 2: 120, 3: 300 },
        3: { 1: 80, 2: 100, 3: 300 },
        4: { 1: 120, 2: 140, 3: 400 },
        5: { 1: 120, 2: 140, 3: 400 },
        6: { 1: 140, 2: 160, 3: 450 },
        7: { 1: 140, 2: 160, 3: 450 },
    }

    const day = await input(`กรุณากรอกวันที่\n1: วันจันทร์\n2: วันอังคาร\n3: วันพุธ\n4: วันพฤหัสบดี\n5: วันศุกร์\n6: วันเสาร์\n7: อาทิตย์\n\n>> `)
    const tier = await input(`กรุณากรอกลำดับ\n1: หรูหรา (Deluxe)\n2: พรีเมี่ยม (Premium)\n3: โซฟา (Sofa)\n\n>> `)
    console.log(`\nวันที่: ${day}, ระดับ: ${tier}\nรวมราคา ${price[parseInt(day)][parseInt(tier)]} บาท`)
})()