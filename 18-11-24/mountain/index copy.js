import { input } from "../../function.js"

/**
 * h=5
 *5:    #     // #1 : 4
 *4:   ###    // #3 : 3
 *3:  #####   // #5 : 2
 *2: #######  // #7 : 1
 *1:######### // #9 : 0

 * h=8
 *8:       #        // #1 : i-1
 *7:      ###       // #3
 *6:     #####      // #5
 *5:    #######     // #7
 *4:   #########    // #9
 *3:  ###########   // #11
 *2: #############  // #13
 *1:############### // #15
 */

(async () => {
    const h = parseInt(await input("กรอกความสูง: "))
    var e = []
    for (let i = h; i > 0; i--) {
        var hastag = '#'
        if (i - h <= 0) hastag = '#'.repeat(((h - i) * 2) + 1)
        e.push(' '.repeat(i - 1) + hastag)
        // console.log(`${i}/${h} ${h - i}: ${i > 0}`)
    }
    console.log("\n" + e.join("\n"))
})()
