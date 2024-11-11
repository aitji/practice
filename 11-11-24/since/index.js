// ในการคำนวณอายุนำปีปัจจุบัน - ปีที่เกิด ก็จะทราบอายุโดยประมาณ แต่ถ้านำเดือน ปัจจุบัน - เดือนเกิดก็จะทราบเดือนด้วย
// ระวังเช่นครูโจ๊กเกิดเมื่อเดือน 9 ปี 2529 ปัจจุบันคือเดือน 7 ปี 2565 จะได้ 2565-2529=36 และ 7-9 = -2 หมายความว่าจะต้องลดอายุลง 1 ปี จาก 36 เหลือ 35 และจำนวนเดือนที่ได้จะเป็น 12-2 = 10 นั่นคือปัจจุบันครูโจ๊กอายุ 35 ปี 10 เดือน
const input = async (msg) => {
    console.log(msg)
    return new Promise(res => {
        process.stdin.resume() // พิเศษ :p
        process.stdin.on('data', data => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}

(async () => {
    var y = await input('- กรอกปีเกิด พ.ศ. -')
    if (isNaN(y)) return console.log('[*] กรุณากรอกปีเกิด พ.ศ.')
    else y -= 543

    var m = await input('- กรอกเดือนเกิด 1-12 -')
    if (isNaN(m)) return console.log('[*] กรุณากรอกเดือนเกิด 1-12')
    else if (m < 1 || m > 12) return console.log('[*] กรุณากรอกเดือนเกิด 1-12')

    const now = new Date()
    const year = now.getFullYear() - y
    const month = now.getMonth() - m
    console.log(`\nอายุของคุณคือ ${year} ปี ${month} เดือน`)
})()