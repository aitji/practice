// จงเขียนโปรแกรม รับจำนวนเต็ม 1 ตัวโดยต้องรับ 4 หลักจากนั้นทำการตัดหลักให้แต่ละหลักเป็ร A B C D จากนั้นแสดงผลค่าตัวแปรทั้งสี่ตัวที่รับเข้ามา จากนั้นทำการสลับข้อมูลในตัวแปรโดยให้ A สลับกับ D จากนั้น ให้ B สลับกับ C แล้วทำการแสดงผลค่าในตัวแปรอีกครั้ง แสดงออกทางหน้าจอ
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
    const number = await input("- กรอกเลขจำนวนเต็ม 4 หลัก -")
    if (number.length !== 4) return console.log("กรุณากรอกเลขจำนวนเต็ม 4 หลัก")
    else if (isNaN(number)) return console.log("กรุณากรอกเลขจำนวนเต็ม 4 หลัก")

    var [a, b, c, d] = number.split("").map(Number)
    const display = () => console.log(`( แสดงตัวแปร ที่รับเข้ามา -\nA, B, C, D\n${a}, ${b}, ${c}, ${d} )`)

    display()
    console.log('- สลับข้อมูลในตัวแปร A สลับกับ D และ B สลับกับ C -')

    // A swap D
    a = a + d
    d = a - d
    a = a - d

    // B swap C
    b = b + c
    c = b - c
    b = b - c

    display()
})()