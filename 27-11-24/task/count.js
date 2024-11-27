import { input } from "../../function.js"

(async () => {
    const n = await input("ป้อนตัวเลขในรูปแบบเว้นวรรค")
    const full = n.split(" ").map(Number).sort((a, b) => b - a)
    console.log(full[0])
})()