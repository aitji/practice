const input = async (msg) => {
    return new Promise(res => {
        process.stdout.write(msg)
        process.stdin.resume()
        process.stdin.once('data', data => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}

(async () => {
    const total = await input('กรอกจำนวนเงินเพื่อแลกเป็นเหรียญ\n>> ')
    let coin = parseInt(total)
    const coins = { ten: 0, five: 0, two: 0, one: 0 }

    coins.ten = Math.floor(coin / 10)
    coin %= 10

    coins.five = Math.floor(coin / 5)
    coin %= 5

    coins.two = Math.floor(coin / 2)
    coin %= 2

    coins.one = coin
    console.log(
        `\nมีเงินทั้งหมด: ${total} บาท แบ่งออกเป็น\n` +
        `เหรียญสิบ  ${coins.ten} เหรียญ  (x${coins.ten * 10} บาท)\n` +
        `เหรียญห้า  ${coins.five} เหรียญ  (x${coins.five * 5} บาท)\n` +
        `เหรียญสอง ${coins.two} เหรียญ  (x${coins.two * 2} บาท)\n` +
        `เหรียญบาท ${coins.one} เหรียญ  (x${coins.one} บาท)`
    )
})()