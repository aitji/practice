[ TEST RUNDOWN ]
prompt('')
 | work use prompt!
 | not work use input function
```js
/**@returns {String}: other lang have a build in input command but not for javascript*/
export const input = (msg='') => {
    return new Promise((res) => {
        process.stdout.write(msg)
        process.stdin.resume()
        process.stdin.once('data', (data) => {
            res(data.toString().trim())
            process.stdin.pause()
        })
    })
}
```
run
 | program isn't run correctly (console powershell)
 | Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser