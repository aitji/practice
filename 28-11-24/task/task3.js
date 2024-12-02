import { input } from "../../function.js"

(async () => {
    const full = await input('กรอกจำนวน a กับ b โดยเว้นช่องว่าง\nเช่น: 6 15 จะได้ a=6, b=15\n\n>> ')
    var [a, b] = full.split(' ').map(e => parseInt(e))
    if (a == 0 || b == 0) {
        console.log('a,b ไม่สามารถเป็น 0 ได้')
        return
    }
    while (b !== 0) {
        var temp = b
        b = a % b
        a = temp
    }
    console.log(`หารร่วมมากของ ${full.split(' ')[0].toLocaleString()} และ ${full.split(' ')[1].toLocaleString()} ได้แก่ ${parseInt(a).toLocaleString()}`)
})()