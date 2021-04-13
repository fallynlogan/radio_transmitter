radio.setGroup(1)
basic.forever(function () {
    radio.sendString("Hello World")
    basic.pause(500)
})
