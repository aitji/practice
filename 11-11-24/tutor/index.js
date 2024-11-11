// จงเขียนโปรแกรมคำนวณคำนวณค่าเรียนพิเศษของ ติวเตอร์คณิตศาสตร์ แห่งหนึ่ง โดย ติวเตอร์แห่งนี้ คิดค่าเรียนเป็นรายชั่วโมง ชั่วโมงละ 450 บาท และจ่ายแบบครั้งค่อครั้ง

const input = async (msg) => {
    console.log(msg)
    return new Promise((res) => {
        process.stdin.on('data', data => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}

(async () => {
    const hour = await input('- กรอกจํานวนชั่วโมง -')
    if (isNaN(hour)) return console.log('กรุณากรอกจํานวนชั่วโมง')
    else if (hour <= 0) return console.log('กรุณากรอกจํานวนชั่วโมงมากกว่า 0')

    const price = 450
    console.log('* ติวเตอร์คณิตศาสตร์ คิดค่าเรียนเป็นรายชั่วโมง ชั่วโมงละ 450 บาท\n')
    for (let i = 0; i < hour; i++) console.log(`ชั่วโมงที่ ${i + 1} จ่าย ${price} บาท | รวมทั้งสิ้น ${price * (i + 1)} บาท`)
    console.log(`* รวมทั้งสิ้น ${hour} ชั่วโมง ${price * hour} บาท`)
})()