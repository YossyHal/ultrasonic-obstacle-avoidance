let u = 0
Maqueen_V5.I2CInit()
basic.forever(function () {
    u = Maqueen_V5.Ultrasonic()
    if (u < 25 && u > 0) {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M1, Maqueen_V5.Dir.CW, 100)
        Maqueen_V5.motorRun(Maqueen_V5.Motors.M2, Maqueen_V5.Dir.CW, 0)
    } else {
        Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
    }
})
