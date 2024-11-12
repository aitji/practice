<div align="right">
    <img src="https://raw.githubusercontent.com/aitji/practice/refs/heads/main/img/aitji-round.png" alt="aitji" align="left" width="64" height="auto">
    <p>
    <a href="../../">หน้าหลัก</a> | 
    <a href="../">ไปยัง (12-11-24)</a> | 
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
// สร้างตัวแปรสำหรับเก็บตัวเลข
const list = []
// รับตัวเลขที่จะทำการถามซ้ำ
let len = await input(`- กรอกรอบในการป้อนตัวเลข -`)
// เปลี่ยนให้ string เป็น number
len = parseInt(len)
// ทำซ้ำจนขนาดของ ตัวแปรสำหรับเก็บตัวเลข มีค่ามากกว่า ตัวเลขที่จะทำการถามซ้ำ
while (list.length < len) {
    // ตัวแปร e สำหรับเก็บข้อมูลชั่วคราว
    var e = await input(`- ป้อนตัวเลขที่ ${list.length}/${len} -`)
    // เพิ่ม e ในตัวแปรสำหรับเก็บตัวเลข
    list.push(e)
}

console.log(`
    มีตัวเลขทั้งหมด ${len}
    โดยมี ${list.join(' ')}
    เรียงได้เป็น ${list.map(Number).sort((a, b) => a - b).join(' ')}
`)
/**
 * แสดงค่าตัวเลข
 * แสดงขนาดของตัวแปรสำหรับเก็บตัวเลข
 * เปลี่ยน ตัวแปรสำหรับเก็บตัวเลข แล้วทำให้ข้อมูลกลายเป็นตัวเลข
 * เรียงตัวเลข a-b แล้วเว้นวรรค
 */
```

วิธีการใช้งานโปรแกรม
```
cd 11-11-24/swap-var
node index.js
```

ผลลัพธ์อ้างอิงจาก powershell
```
มีตัวเลขทั้งหมด 5
โดยมี 5 4 3 2 1
เรียงได้เป็น 1 2 3 4 5
```

<div align="center"><sub>©aitji's 2024 all rights reserved</sub></div>
<hr>