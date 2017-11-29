(function createTable () {
    var table = document.getElementById('content')
    var tr_arr = []
    for (var i = 0; i < 11; i++) {
        // 定义行       
        tr_arr[i] = document.createElement("tr")
        table.appendChild(tr_arr[i])
        for (var j = 0; j < 11; j++) {
            // 定义列
            var td_arr = []
            td_arr[j] = document.createElement('td')
            tr_arr[i].appendChild(td_arr[j])
            // 首行数字
            if (i == 0) {
                td_arr[j].setAttribute('class','clear_border')
                if (j > 0) td_arr[j].innerHTML = j
            }
            if (j == 0) {
                td_arr[0].setAttribute('class','clear_border')
                if (i > 0) td_arr[0].innerHTML = i
            }
        }
    }
})()

var robot = document.getElementById('robot_box')
var go_btn = document.getElementById('go')
var left_btn = document.getElementById('left')
var right_btn = document.getElementById('right')
var back_btn = document.getElementById('back')
var deg = 0 //初始化角度
var face = 0 //初始化方向 0：上，1：左，2：下，3：右
// top和left像素
var xPos = 50
var yPos = 50

var robotBox = {
    xPos: function() {
        // xPos += "px"
        return robot.style.top
    },
    yPos: function() {
        // yPos += "px"
        return robot.style.left
    },
    face: function() {
        face = face % 4
        if (face == 0) {
            console.log(face,"朝上")
            return face
        } else if (face == 1) {
            console.log(face,"朝左")
            return face
        } else if (face == 2) {
            console.log(face,"朝下")
            return face
        } else {
            console.log(face,"朝右")
            return face
        }
    },
    go: function() {
        var inputTxt = document.getElementById('inputTxt')
        switch (inputTxt.value) {
            case "":
                switch (face) {
                    case 0:
                    if (yPos > 50) {
                        yPos -= 50
                        robot.style.top = yPos + 'px'
                    }
                    break
                case 1:
                    if (xPos > 50) {
                        xPos -= 50
                        robot.style.top = xPos + 'px'
                    }
                    break
                case 2:
                    if (yPos < 500) {
                        yPos += 50
                        robot.style.top = yPos + 'px'
                    }
                    break
                default:
                    if (xPos < 500) {
                        xPos += 50
                        robot.style.left = xPos + 'px'
                    }
                    break
                }
                break
            case "TUN LEF":
                robotBox.turnLeft()
                break
            case "TUN RIG":
                robotBox.turnRight()
            case "Tun BAC":
                robotBox.turnBack()
            default:
                alert("在输入框中可输入如下指令,TUN LEF：向左转,TUN RIG：向右转,TUN BAC：向右转,不填任何指令则默认向头顶朝的方向前进一格")
                break
        }
    },
    turnLeft: function() {
        // face = face % 4
        deg -= 90
        robot.style.transform = "rotate(" + deg + "deg)"
        face++
        robotBox.face()
    },
    turnRight: function() {
        // face = face % 4
        deg += 90
        robot.style.transform = "rotate(" + deg + "deg)"
        face += 3
        robotBox.face()
    },
    turnBack: function() {
        deg += 180
        robot.style.transform = "rotate(" + deg + "deg)"
        face += 2
        robotBox.face()
    }
}

go_btn.addEventListener('click', robotBox.go, false)
left_btn.addEventListener('click', robotBox.turnLeft, false)
right_btn.addEventListener('click', robotBox.turnRight, false)
back_btn.addEventListener('click', robotBox.turnBack, false)