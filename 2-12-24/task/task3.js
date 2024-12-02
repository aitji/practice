import { input } from "../../function.js"

/**
:3 5 1 0 -2
>0 1 5 3
   3
  55
 111
0000

:0 1 5 3 10
> 3 5 1 0
   0
  11
 555
3333

7 8 2 7 3 0 2 7 523
> 0 7 2 0 3 7 2 8 7
        7
       88
      222
     7777
    33333
   000000
  2222222
 77777777
000000000
 */

(async () => {
    const e = await input("กรุณาใส่ตัวเลข (คั่นด้วยช่องว่าง)\n>> ")
    const numbers = e.split(' ').map(Number)

    const vaild = []
    for (const num of numbers) {
        if (num < 0 || num >= 10) break
        vaild.push(num)
    }

    const max = vaild.length
    for (let i = 0; i < max; i++) {
        const spaces = ' '.repeat(max - i - 1)
        const digits = String(vaild[i]).repeat(i + 1)
        console.log(spaces + digits)
    }
})()