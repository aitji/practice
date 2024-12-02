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
    const tempu = await input('กรอกอุณหถูมิ\n>> ')
    if (tempu <= 0) console.log('น้ำจะมีสถานะเป็นของแข็ง')
    else if(tempu >= 100) console.log('น้ำมีสถานะป็นก๊าซ')
    else console.log('น้ำมีสถานะเป็นของเหลว')
})()