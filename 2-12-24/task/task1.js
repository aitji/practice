import { input } from "../../function.js"

(async () => {
    var vaule = await input('กรอกจำนวนเต็ม โดยคั่นด้วยเว้นวรรค เช่น 1 2 3 4 5\n\n>> ')
    vaule = vaule.split(' ')
    const odd = []
    for (let i = 0; i < vaule.length; i++) {
        if (vaule[i] % 2 == 1) odd.push(vaule[i])
    }
    console.log(`มีเลขคี่ทั้งหมด: ${odd.length} ตัว ได้แก่ ${odd.join(', ')}`)
})()