<div align="right">
    <img src="https://raw.githubusercontent.com/aitji/practice/refs/heads/main/img/aitji-round.png" alt="aitji" align="left" width="64" height="auto">
    <p>
    <a href="../../">หน้าหลัก</a> | 
    <a href="../">ไปยัง (13-11-24)</a> | 
    <a href="#">ย้อนกลับ (ไม่พบ)</a> | 
    <a href="#">ถัดไป (ไม่พบ)</a>
    </p>
</div>

<hr>

## โจทย์ปัญหา
> [!NOTE]
> ใช้ภาษา javascript ในการทำโจทย์นี้

เขียนโปรแกรมเพื่อรับตัวเลขจากผู้ใช้หลายรอบ และแสดงผลการเรียงลำดับตัวเลข


### โค้ดภาษา javascript พร้อมคอมเม้น

```js
console.log('มีผลไม้ | ชนิดยาพิษ')
/** note: N=จำนวนผลไม้, S=จำนวนชนิดยาพิษ */
const [N, S] = (await input()).split(' ').map(Number)

console.log(`มีผลไม้ ${N} ผล | ชนิดยาพิษ ${S} ชนิด\n`)
const weights = [] /* เก็บน้ำหนักของผลไม้แต่ละชิ้น */
const poisons = [] /* เก็บสถานะยาพิษของผลไม้แต่ละชิ้น */

console.log("ผลไม้ชิ้นที่ น้ำหนัก [-1: มียาพิษชนิดนั้น, 0: ไม่มียาพิษและไม่มียาถอน, 1: มียาถอนพิษชนิดนั้น]")
for (let i = 0; i < N; i++) {
    const line = (await input()).split(' ').map(Number)
    weights[i] = line[0] /* น้ำหนักของผลไม้ชิ้นที่ i */
    poisons[i] = line.slice(1) /* สถานะยาพิษของผลไม้ชิ้นที่ i */
}

/**
 * ฟังก์ชันสำหรับค้นหาน้ำหนักรวมน้อยที่สุดที่สามารถกำจัดยาพิษได้ทั้งหมด
 * @param {number} startFruit - ชิ้นผลไม้ที่เริ่มกินก่อน
 * @returns {number} น้ำหนักรวมน้อยที่สุดหรือ -1 หากไม่สามารถกำจัดยาพิษได้ทั้งหมด
 */
function findMinCure(startFruit) {
    /** เซ็ตของชนิดยาพิษจากผลไม้ชิ้นแรก */
    const initialPoisons = new Set()
    for (let j = 0; j < S; j++) if (poisons[startFruit][j] === -1) initialPoisons.add(j)

    /** ถ้าไม่มีพิษตั้งแต่แรก ก็ไม่ต้องทำอะไรเลย */
    if (initialPoisons.size === 0) return 0

    /** คิวสำหรับเก็บสถานะการกิน */
    const queue = [{
        poisons: initialPoisons, /* เซ็ตของชนิดยาพิษที่เหลืออยู่ */
        weightSum: 0, /* น้ำหนักรวมจากการกิน */
        eaten: new Set() /* ชุดของผลไม้ที่กินไปแล้ว */
    }]

    let minWeight = Infinity /* น้ำหนักรวมน้อยที่สุดที่หาได้ */

    while (queue.length > 0) {
        const current = queue.shift() /* หยิบสถานะปัจจุบันออกจากคิว */

        /** ถ้ากำจัดยาพิษหมดแล้ว อัปเดตน้ำหนักรวมที่น้อยที่สุด */
        if (current.poisons.size === 0) {
            minWeight = Math.min(minWeight, current.weightSum)
            continue
        }

        /** ลองกินผลไม้ที่เหลือทั้งหมด */
        for (let i = 0; i < N; i++) {
            if (i === startFruit || current.eaten.has(i)) continue /* ข้ามถ้าผลไม้นี้คือชิ้นเริ่มต้นหรือกินไปแล้ว */

            /** ตรวจสอบว่าผลไม้นี้ช่วยกำจัดยาพิษได้หรือไม่ */
            let helps = false
            for (const poison of current.poisons) {
                if (poisons[i][poison] === 1) { /* ถ้ามียาถอนพิษชนิดนี้ */
                    helps = true
                    break
                }
            }

            if (!helps) continue /* ข้ามถ้าผลไม้นี้ช่วยไม่ได้ */

            /** สร้างสถานะใหม่หลังจากกินผลไม้นี้ */
            const newPoisons = new Set(current.poisons)

            /** กำจัดยาพิษที่ถูกถอน */
            for (const poison of current.poisons) {
                if (poisons[i][poison] === 1) {
                    newPoisons.delete(poison)
                }
            }

            /** เพิ่มยาพิษใหม่จากผลไม้นี้ */
            for (let j = 0; j < S; j++) if (poisons[i][j] === -1) newPoisons.add(j)

            /** เพิ่มสถานะใหม่ลงในคิว */
            const newEaten = new Set(current.eaten)
            newEaten.add(i)

            queue.push({
                poisons: newPoisons,
                weightSum: current.weightSum + weights[i], /* เพิ่มน้ำหนักรวม */
                eaten: newEaten
            })
        }
    }

    /** ถ้าหาไม่ได้เลยให้คืนค่า -1 */
    return minWeight === Infinity ? -1 : minWeight
}

/** ค่ามากที่สุดของน้ำหนักรวมน้อยที่สุด */
let maxMinWeight = 0
let hasPoison = false /* ตรวจสอบว่ามียาพิษหรือไม่ */

/** ลองทุกผลไม้เป็นจุดเริ่มต้น */
for (let i = 0; i < N; i++) {
    /** ตรวจสอบว่าผลไม้ชิ้นนี้มียาพิษหรือไม่ */
    let hasAnyPoison = false
    for (let j = 0; j < S; j++) {
        if (poisons[i][j] === -1) {
            hasAnyPoison = true
            hasPoison = true
            break
        }
    }

    if (!hasAnyPoison) continue /* ข้ามถ้าผลไม้นี้ไม่มีพิษ */

    /** หา "น้ำหนักรวมน้อยที่สุด" สำหรับผลไม้ชิ้นนี้ */
    const minWeight = findMinCure(i)
    if (minWeight !== -1) maxMinWeight = Math.max(maxMinWeight, minWeight) /** อัปเดตค่าสูงสุด */
}

console.log(`\nผลลัพธ์: ${hasPoison ? maxMinWeight : 0}`)
```

วิธีการใช้งานโปรแกรม
```
cd 12-11-24/sort
node index.js
```

ผลลัพธ์อ้างอิงจาก powershell
```
มีผลไม้ | ชนิดยาพิษ
4 2
มีผลไม้ 4 ผล | ชนิดยาพิษ 2 ชนิด

ผลไม้ชิ้นที่ น้ำหนัก [-1: มียาพิษชนิดนั้น, 0: ไม่มียาพิษและไม่มียาถอน, 1: มียาพิษชนิดนั้น]
5 0 1
6 -1 1
7 1 0
8 -1 -1

ผลลัพธ์: 7
```

<div align="center"><sub>©aitji's 2024 all rights reserved</sub></div>
<hr>