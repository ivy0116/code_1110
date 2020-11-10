basic.forever(function () {
    let y: number;
for (let x = 0; x <= 4; x++) {
        led.plot(4 - x, x)
        y = 0
        while (y <= x - 1) {
            led.plot(4 - y, x)
            led.plot(4 - x, y)
            y += 1
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
