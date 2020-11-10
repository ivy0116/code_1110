def on_forever():
    for x in range(5):
        led.plot(4 - x, x)
        y = 0
        while y <= x - 1:
            led.plot(4 - y, x)
            led.plot(4 - x, y)
            y += 1
        basic.pause(200)
    basic.clear_screen()
basic.forever(on_forever)
