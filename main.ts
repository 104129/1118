input.onGesture(Gesture.LogoUp, function () {
	
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Reverse, 60)
    }
    if (receivedNumber == 2) {
        bitbot.go(BBDirection.Forward, 60)
    }
    if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 60)
    }
    if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 60)
    }
    if (receivedNumber == 5) {
        bitbot.stop(BBStopMode.Brake)
    }
    if (receivedNumber == 6) {
        for (let index = 0; index < 2; index++) {
            bitbot.buzz(true)
            basic.pause(100)
            bitbot.buzz(false)
            basic.pause(100)
        }
    }
    if (receivedNumber == 7) {
        距離循線()
    }
    if (receivedNumber == 8) {
        距離 = bitbot.sonar(BBPingUnit.Centimeters)
        basic.showNumber(距離)
        radio.sendValue("Z", 距離)
    }
    if (receivedNumber == 9) {
        bitbot.stop(BBStopMode.Brake)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
function 循線 () {
    // 白線上
    // 停下來
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.stop(BBStopMode.Brake)
        // 開始計時
        開始時間 = input.runningTime()
        // 在黑線上
        while (!((bitbot.readLine(BBLineSensor.Left) == 1 || bitbot.readLine(BBLineSensor.Right) == 1) && input.runningTime() - 開始時間 <= 400 || input.runningTime() - 開始時間 > 400)) {
            bitbot.rotate(BBRobotDirection.Right, 30)
        }
        bitbot.stop(BBStopMode.Brake)
        結束時間 = input.runningTime() - 開始時間
        if (input.runningTime() - 開始時間 <= 400) {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Right, 30)
            }
        } else {
            // 在黑線上
            while (!(bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1)) {
                bitbot.rotate(BBRobotDirection.Left, 30)
            }
        }
    }
    // 右邊
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
        bitbot.rotate(BBRobotDirection.Left, 15)
    }
    // 左邊
    if (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 115)
    }
    // 黑線上
    if (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.go(BBDirection.Forward, 60)
    }
}
input.onGesture(Gesture.Shake, function () {
	
})
function 距離循線 () {
    while (bitbot.sonar(BBPingUnit.Centimeters) > 10) {
        循線()
    }
    bitbot.stop(BBStopMode.Brake)
}
input.onGesture(Gesture.LogoDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if ("Z" == name) {
        basic.showNumber(value)
    }
})
let 結束時間 = 0
let 開始時間 = 0
let 距離 = 0
radio.setGroup(2)
let 頁面 = 1
basic.showNumber(頁面)
basic.forever(function () {
	
})
