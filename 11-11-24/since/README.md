<div align="left">
    <img src="https://raw.githubusercontent.com/aitji/practice/refs/heads/main/img/aitji-round.png" alt="aitji" align="left" width="64" height="auto">
    <p>
    <a href="../../">หน้าหลัก</a> | 
    <a href="../../">ไปยัง (11-11-24)</a> | 
    <a href="../tutor/">ย้อนกลับ (ติวเตอร์)</a> | 
    <a href="../swap-var/">ถัดไป (สลับตัวแปร)</a>
    </p>
</div>

<hr>

## โจทย์ปัญหา
> [!NOTE]
> ใช้ภาษา javascript ในการทำโจทย์นี้

ในการคำนวณอายุนำปีปัจจุบัน - ปีที่เกิด ก็จะทราบอายุโดยประมาณ แต่ถ้านำเดือน ปัจจุบัน - เดือนเกิดก็จะทราบเดือนด้วย
(เพิ่มเติม *ไม่ได้ใช้เท่าไร x-x*) ``เช่นครูโจ๊กเกิดเมื่อเดือน 9 ปี 2529 ปัจจุบันคือเดือน 7 ปี 2565 จะได้ 2565-2529=36 และ 7-9 = -2 หมายความว่าจะต้องลดอายุลง 1 ปี จาก 36 เหลือ 35 และจำนวนเดือนที่ได้จะเป็น 12-2 = 10 นั่นคือปัจจุบันครูโจ๊กอายุ 35 ปี 10 เดือน``


### โค๊ดภาษา javascript พร้อมคอมเม้น

```js
// รับค่าปี(พ.ศ.)ในตัวแปร y
var y = await input('- กรอกปีเกิด พ.ศ. -')
// กรองข้อมูลที่กรอก
if (isNaN(y)) return console.log('[*] กรุณากรอกปีเกิด พ.ศ.')
// ลดปีให้เป็น (ค.ศ.) | -543
else y -= 543

// รับค่าเดือน(1-12)ในตัวแปร m
var m = await input('- กรอกเดือนเกิด 1-12 -')
// กรองข้อมูลที่กรอก
if (isNaN(m)) return console.log('[*] กรุณากรอกเดือนเกิด 1-12')
// กรองเดือนระหว่าง 1ถึง12
else if (m < 1 || m > 12) return console.log('[*] กรุณากรอกเดือนเกิด 1-12')

// รับค่าเวลาตอนนี้
const now = new Date()
// รับค่าปีจากเวลา และหักออกด้วย ปีเกิด
const year = now.getFullYear() - y
// รับค่าเดือนจากเวลา และหักออกด้วย เดือนเกิด
const month = now.getMonth() - m
// แสดงข้อมูล
console.log(`\nอายุของคุณคือ ${year} ปี ${month} เดือน`)
```

วิธีการใช้งานโปรแกรม
```
cd 11-11-24/since
node index.js
```

ผลลัพธ์อ้างอิงจาก powershell
```
- กรอกปีเกิด พ.ศ. -
2552
- กรอกเดือนเกิด 1-12 -
2 
อายุของคุณคือ 15 ปี 8 เดือน
```

<div align="center"><sub>©aitji's 2024 all rights reserved</sub></div>
<hr>