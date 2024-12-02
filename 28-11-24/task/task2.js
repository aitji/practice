import { input } from "../../function.js"

/**
 * h=8
 *8:-------1        // #1 : i-1
 *7:------121       // #3
 *6:-----12321      // #5
 *5:----1234321     // #7
 *4:---123454321    // #9
 *3:--12345654321   // #11
 *2:-1234567654321  // #13
 *1:123456787654321 // #15
 */

(async () => {
    const h = parseInt(await input("กรอกความสูง: "))
    var e = []
    for (let i = h; i > 0; i--) {
        var hastag = 1
        if (i - h <= 0) {
            var tem = []
            var long = ((h - i) * 2) + 1
            for (let j = 0; j < long; j++) {
                if (j > Math.floor(long / 2)) tem.push(`${long - j}`)
                else tem.push(`${j + 1}`)
            }
            hastag = tem.join('')
        }
        e.push('-'.repeat(i - 1) + hastag)
    }
    console.log("\n" + e.join("\n"))
})()