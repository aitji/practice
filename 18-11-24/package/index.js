import { input } from "../../function.js"

const adddate = (start, add) => {
    const resdate = new Date(start)
    resdate.setDate(resdate.getDate() + add)
    return resdate
}

(async () => {
    const start = new Date(2024, 5, 15)
    const add = parseInt(await input('บริษัทขนส่งแจ้งว่าของจะมาส่งในอีก (เช่น 20) วัน') || '20')
    const delivery = adddate(start, add)

    const day = delivery.getDate()
    const month = delivery.getMonth() + 1
    const year = delivery.getFullYear()

    console.log(`ครูโจ๊กจะได้รับสินค้าในวันที่ ${day} เดือนที่ ${month} ปีพุทธศักราช ${year + 543}`)
})()