import { input } from "../../function.js"

/**
 * h=5
 *5:    # 4
 *4:   ## 3
 *3:  ### 2
 *2: #### 1
 *1:##### 0 5-0
 */

(async () => {
    const h = parseInt(await input("กรอกความสูง: "))
    var e = []
    for (let i = h; i > 0; i--) {
        console.log(`${i === 0 ? '' : ' '.repeat(i - 1)}${h - i === 0 ? '#' : '#'.repeat((h - i) + 1)}`)
    }
})()
