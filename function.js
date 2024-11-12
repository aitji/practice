export const input = (msg) => {
    return new Promise((res) => {
        process.stdout.write(msg)
        process.stdin.resume()
        process.stdin.once('data', (data) => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}