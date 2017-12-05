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
        } else if (face == 3) {
            console.log(face,"朝右")
            return face
        } else {
            throw "错了错了"
        }
    },
    go: function() {
        var inputTxt = document.getElementById('inputTxt')
        switch (inputTxt.value) {
            case "":
                switch (face) {
                    case 0:
                        robotBox.transTop()
                        break
                    case 1:
                        robotBox.transLeft()
                        break
                    case 2:
                        robotBox.transBottom()
                        break
                    default:
                        robotBox.transRight()
                        break
                    }
                break
            case "TUN LEF":
                robotBox.turnLeft()
                break
            case "TUN RIG":
                robotBox.turnRight()
                break
            case "TUN BAC":
                robotBox.turnBack()
                break
            case "TRA LEF":
                robotBox.transLeft()
                break
            case "TRA TOP":
                robotBox.transTop()
                break
            case "TRA RIG":
                robotBox.transRight()
                break
            case "TRA BOT":
                robotBox.transBottom()
                break
            case "MOV LEF":
                robotBox.moveLeft()
                break
            case "MOV TOP":
                robotBox.moveTop()
                break
            case "MOV RIG":
                robotBox.moveRight()
                break
            case "MOV BOT":
                robotBox.moveBottom()
                break
            default:
                alert("指令错误，请查阅右边的指令")
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
    },
    transLeft: function() {
        if (xPos > 50) {
            xPos -= 50
            robot.style.left = xPos + 'px'
        }
    },
    transTop: function() {
        if (yPos > 50) {
            yPos -= 50
            robot.style.top = yPos + 'px'
        }
    },
    transRight: function() {
        if (xPos < 500) {
            xPos += 50
            robot.style.left = xPos + 'px'
        }
    },
    transBottom: function() {
        if (yPos < 500) {
            yPos += 50
            robot.style.top = yPos + 'px'
        }
    },
    moveLeft: function() {
        if (face != 1) {//如果方向不同
            var little = setInterval(function() {
                // 一直向左转，直到方向朝左
                robotBox.turnLeft()
                if (face == 1) {
                    clearInterval(little)
                }
            },100)
            setTimeout('robotBox.transLeft()',1000)
        } else {
            setTimeout('robotBox.transLeft()',1000)
        }
    },
    moveTop: function() {
        if (face != 0) { //如果方向不同
            var little = setInterval(function() {
                robotBox.turnLeft()
                if (face == 0) {
                    clearInterval(little)
                }
            },100)
            setTimeout('robotBox.transTop()',1000)
        } else {
            setTimeout('robotBox.transTop()',1000)
        }
    },
    moveRight: function() {
        if (face != 3) { //如果方向不同
            var little = setInterval(function() {
                robotBox.turnLeft()
                if (face == 3) {
                    clearInterval(little)
                }
            }, 100)
            setTimeout('robotBox.transRight()',1000)
        } else {
            setTimeout('robotBox.transRight()',1000)
        }
    },
    moveBottom: function() {
        if (face != 2) { //如果方向不同
            var little = setInterval(function() {
                robotBox.turnLeft()
                if (face == 2) {
                    clearInterval(little)
                }
            }, 100)
            setTimeout('robotBox.transBottom()',1000)
        } else {
            setTimeout('robotBox.transBottom()',1000)
        }
    }
}

go_btn.addEventListener('click', robotBox.go, false)
left_btn.addEventListener('click', robotBox.turnLeft, false)
right_btn.addEventListener('click', robotBox.turnRight, false)
back_btn.addEventListener('click', robotBox.turnBack, false)