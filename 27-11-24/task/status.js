import { input } from "../../function.js"

(async () => {
    var status = await input('ป้อนระดับการจราจร\n1: คล่องตัว\n2: ปานกลาง\n3: หนาแน่น\n\n>> ')
    status = parseInt(status)
    var distance = await input('ป้อนระยะทาง: ')
    distance = parseInt(distance)
    switch (status) {
        case 1: distance *= 10; break
        case 2: distance *= 12; break
        case 3: distance *= 15; break
        default: break
    }
    console.log(`\n\nระดับความหนาแน่นของการจราจร: ${status}\nระยะทาง: ${distance}`)
})()