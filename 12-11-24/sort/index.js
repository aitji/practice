const input = async (msg) => {
    console.log(msg)
    return new Promise((res) => {
        process.stdin.resume()
        process.stdin.on('data', data => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}

(async () => {
    const list = []
    let len = await input(`- กรอกรอบในการป้อนตัวเลข -`)

    len = parseInt(len)
    while (list.length < len) {
        var e = await input(`- ป้อนตัวเลขที่ ${list.length}/${len} -`)
        list.push(e)
    }

    const sorted = list.map(Number).sort((a, b) => a - b)
    console.log(`\nมีตัวเลขทั้งหมด ${len}\nโดยมี ${list.join(' ')}\nเรียงได้เป็น ${sorted.join(' ')}`)
})()