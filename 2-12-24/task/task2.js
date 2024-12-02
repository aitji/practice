import { input } from "../../function.js"

const type = {
    0: { label: 'ดาว', price: 7 },
    1: { label: 'เจียว', price: 10 },
    2: { label: 'ต้ม', price: 5 },
    3: { label: 'ตุ๋น', price: 20 },
}

const list = []
const menu = []
for (let i = 0; i < Object.keys(type).length; i++) {
    const t = type[i]
    menu.push(`${i + 1}. ไข่${t.label} ราคา ${t.price} (ไข่หนึ่งฟอง)`)
}

async function main() {
    console.log(
        `\nยินดีต้อนรับสู่ร้าน @พ่อครัวหัวไข่\n` +
        `พิมพ์เมนูที่ต้องการสั่งได้เลย\n` +
        `หรือพิมพ์ "?" เพื่อดูเมนู` +
        `\nออกร้านค้าโดยพิมพ์เลข 0`
    )
    const inp = await input('\n>> ')
    if (inp == '?') {
        console.clear()
        console.log(`\nร้าน @พ่อครัวหัวไข่\nร้านของเรามีเมนูทั้งหมด ${menu.length} เมนู ได้แก่\n` + menu.join("\n"))
        return main()
    }
    else if (inp == '0' || inp.endsWith('ออก')) {
        console.clear()
        const lis = []
        var total = 0
        for (let i = 0; i < list.length; i++) {
            const e = list[i]
            total += e.count * e.t.price
            lis.push(`${i + 1}. ไข่${e.t.label} ราคา ${e.t.price} จำนวน ${e.count} บาทต่อฟอง | รวมทั้งสิ้นราคา: ${(e.count * e.t.price).toLocaleString()} บาท`)
        }
        if (lis.length > 0) console.log(`\nคุณสั่งทั้งหมด ${list.length} รายการ ได้แก่\n${lis.join("\n")}\n* รวมเป็นเงินทั้งสิ้น ${total.toLocaleString()} บาท`)
        else console.log('\nคุณยังไม่ได้สั่งรายการใดเลย')

        console.log(`\n\nขอบคุณที่ใช้บริการร้าน @พ่อครัวหัวไข่!`)
        return
    }
    else if (inp == '1' || inp.endsWith('ดาว')) return buy('0')
    else if (inp == '2' || inp.endsWith('เจียว')) return buy('1')
    else if (inp == '3' || inp.endsWith('ต้ม')) return buy('2')
    else if (inp == '4' || inp.endsWith('ตุ๋น')) return buy('3')
    else {
        console.clear()
        console.log(`ขออภัยเราไม่รู้จักเมนู ${inp} สามารถพิมพ์ "?" เพื่อดูเมนูเพิ่มเติมได้`)
        return main()
    }
}

async function buy(id) {
    const t = type[parseInt(id)]
    console.clear()
    console.log(`\nเมนูที่ ${parseInt(id) + 1} เลือกคือ ไข่${t.label} ราคา ${t.price} บาทต่อฟอง\nคุณต้องการเพิ่มไข่ในเมนู กี่ฟอง`)
    const count = await input('\n>> ')
    if (count <= 0) {
        console.clear()
        console.log(`ขออภัย จำนวนไข่ต้องมีค่ามากกว่า 1 ฟอง`)
        return buy(id)
    }

    console.clear()
    return ensure(t, count)
}

async function ensure(t, count) {
    console.log(`\nคุณยืนยันที่จะสั่งซื้อ ไข่${t.label} ราคา ${t.price}บาท\nซึ่งคุณทำการสั่งไข่ทั้งหมด ${parseInt(count).toLocaleString()} ฟอง\nเป็นจำนวนเงินทั้งสิ้น ${parseInt(count * t.price).toLocaleString()} บาท\n\n(ยืนยันพิมพ์ 1)`)
    const ensure = await input(`\n>> `)
    if (ensure.toLowerCase().includes('y') || ensure.includes('1') || ensure.includes('ช') || ensure.includes('ด')) {
        console.clear()
        console.log(`คุณได้ทำการสั่งซื้อ ไข่${t.label} ราคา ${t.price}บาท\nซึ่งคุณทำการสั่งไข่ทั้งหมด ${parseInt(count).toLocaleString()} ฟอง\nเป็นจำนวนเงินทั้งสิ้น ${parseInt(count * t.price).toLocaleString()} บาท`)
        list.push({ t: t, count: parseInt(count) })
        return main()
    } else {
        console.clear()
        console.log(`ยกเลิกเมนูดังกล่าวแล้ว!`)
        return main()
    }
}

console.clear()
main()