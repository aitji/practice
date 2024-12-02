import { input } from "../../function.js"

(async () => {
    const price_string = await input(`ป้อนราคาสินค้าแบ่งแต่ละชิ้นด้วยการเว้นวรรค\nเช่น: 10 20 30 40\n\n(ราคาสินค้า) >> `)
    const price_array = price_string?.split(' ')
    var total = 0, discount = 0
    price_array.map(e => total += parseFloat(e))
    if (total > 50_000) discount = 20
    else if (total > 10_000) discount = 15
    else if (total > 1_000) discount = 10

    const discounted = total * (100 - discount) / 100
    console.log(`\nราคาสินค้าเต็ม: ${price_array.map(e => parseFloat(e).toLocaleString()).join('+')} = ${total.toLocaleString()}\nได้รับส่วนลด ${discount}% เป็นเงิน ${(total - discounted).toLocaleString()} บาท ที่ลดได้\n\nต้องชำระเงินทั้งสิ้น: ${discounted.toLocaleString()} บาท`)
})()