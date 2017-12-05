(function createTable () {
    var table = document.getElementById('table')
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
    document.getElementById('command_input').value = 'MOV RIG 3 \nmoV bot 3 \nMOV lef 1 \ntra bot 2'
    // 实时更新行数标记
    updateLineNum()
})()

// 正则分割内容框里的内容，扩展命令，添加数字
function enhanceCommand(str) {
    var filter = /\n/g
    var inputArr = str.split(filter)
    return inputArr
}

var robot = document.getElementById('robot_box')
var cmd_btn = document.getElementById('command_button')
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
            return face
        } else if (face == 1) {
            return face
        } else if (face == 2) {
            return face
        } else if (face == 3) {
            return face
        } else {
            throw "错了错了"
        }
    },
    go: function(str, line_num) {
        var Li = document.getElementById('command_display_count').getElementsByTagName('li')
        Li[line_num].style.borderRadius = '10px'
        switch (str) {
            case "GO":
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
                    case 3:
                        robotBox.transRight()
                        break
                    default:
                        alert('???')
                        break
                    }
                break
            // case "TUN LEF":
            //     robotBox.turnLeft()
            //     Li[line_num].style.backgroundColor = "#7fadda"
            //     break
            // case "TUN RIG":
            //     robotBox.turnRight()
            //     Li[line_num].style.backgroundColor = "#7fadda"
            //     break
            // case "TUN BAC":
            //     robotBox.turnBack()
            //     Li[line_num].style.backgroundColor = "#7fadda"
            //     break
            case "TRA LEF":
                robotBox.transLeft()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "TRA TOP":
                robotBox.transTop()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "TRA RIG":
                robotBox.transRight()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "TRA BOT":
                robotBox.transBottom()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "MOV LEF":
                robotBox.moveLeft()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "MOV TOP":
                robotBox.moveTop()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "MOV RIG":
                robotBox.moveRight()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            case "MOV BOT":
                robotBox.moveBottom()
                Li[line_num].style.backgroundColor = "#7fadda"
                break
            default: //处理错误的命令所对应的行数
                Li[line_num].style.backgroundColor = "#FF9A9A";
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
        setTimeout(function() {
            if (xPos > 50) {
                xPos -= 50
                robot.style.left = xPos + 'px'
            }
        }, 20)       
    },
    transTop: function() {
        setTimeout(function() {
            if (yPos > 50) {
                yPos -= 50
                robot.style.top = yPos + 'px'
            }
        }, 20)
    },
    transRight: function() {
        setTimeout(function() {
            if (xPos < 500) {
                xPos += 50
                robot.style.left = xPos + 'px'
            }
        }, 20)
    },
    transBottom: function() {
        setTimeout(function() {
            if (yPos < 500) {
                yPos += 50
                robot.style.top = yPos + 'px'
            }
        }, 20)
    },
    moveLeft: function() {
        setTimeout(function() {
            // var little = setInterval(function() {
            //     robotBox.turnLeft()
            //     if (face == 1) {
            //         clearInterval(little)
            //     }
            // },100)
            if (face != 1) {//如果方向不同
                robotBox.turnLeft()
                setTimeout(arguments.callee, 50)
            } else {
                setTimeout(robotBox.transLeft, 1000)
            }
        }, 50)
    },
    moveTop: function() {
        setTimeout(function() {
            if (face != 0) { //如果方向不同
                robotBox.turnLeft()
                setTimeout(arguments.callee, 50)
            } else {
                setTimeout(robotBox.transTop,1000)
            }
        }, 50)
    },
    moveRight: function() {
        setTimeout(function() {
            if (face != 3) { //如果方向不同
                robotBox.turnLeft()
                setTimeout(arguments.callee, 50) //运用链式达到Interval的效果，arguments.callee的用法参考《高程设计》P611
            } else {
                setTimeout(robotBox.transRight,1000)
            }
        },50)
    },
    moveBottom: function() {
        setTimeout(function() {
            if (face != 2) { //如果方向不同
                robotBox.turnLeft()
                setTimeout(arguments.callee, 50)
            } else {
                setTimeout(robotBox.transBottom,1000)
            }
        }, 50)
    }
}

/***************输入框区域的函数***************************/

// 创建行数标记
function renderLineNum(count) {
    var command_display_count = document.getElementById('command_display_count')
    command_display_count.innerHTML = ""
    for (var i = 1; i <= count; i++) {
        var li = document.createElement('li')
        var txt = document.createTextNode(i)
        li.appendChild(txt)
        command_display_count.appendChild(li)
    }
}

// 检测当前输入框文本的行数，实时更新lineNum
function updateLineNum() {
    setTimeout(
        function activeEnter() {
            var command_input = document.getElementById('command_input')
            var line_num = command_input.value //行数
            console.log(line_num)
            line_num.match(/\n/g) ? renderLineNum(line_num.match(/\n/g).length + 1) : renderLineNum(1)
        }, 0)
}

//执行按钮
function render() {
    // 包含命令元素的数组
    var inputArr = enhanceCommand(command_input.value)
    var x = 0
    var conmmand_input = ""
    // js自执行文件前要加分号 以 “（”、“[”、“/”、“+”、或 “-” 开始，那么它极有可能和前一条语句合在一起解释。--《JS权威指南》
    ;(function bigLoop() {
        if (x < inputArr.length) {
            var times = ""
            if (inputArr[x].slice(0, 2).toUpperCase() == "GO") {
                conmmand_input = "GO"
                times = inputArr[x].slice(3) ? Number(inputArr[x].slice(3)) : 1
            } else if (inputArr[x] == "") {
                conmmand_input = "blank"
                times = 1
            } else {
                conmmand_input = inputArr[x].slice(0, 7)
                times = inputArr[x].slice(8) ? Number(inputArr[x].slice(8)) : 1
            }

            if (isNaN(times)) { alert("次数输入有误，请规范书写！") }
            var i = 0

            function finalLoop() {
                if (i < times) {
                    robotBox.go(conmmand_input.toUpperCase(), x)
                    setTimeout(finalLoop, 1000)
                    console.log(conmmand_input, x, i, times)
                    i++
                } else {
                    x++
                    setTimeout(bigLoop, 1000)
                }
            }
            finalLoop()
        }
    })()
}


document.getElementById('clean_button').addEventListener('click', function() {
    command_input.value = ""
    updateLineNum()
}, false)
document.getElementById('refresh_button').addEventListener('click',function(){
    location.reload()
},false)
cmd_btn.addEventListener('click', render, false)

// 上下左右键输出TRA的命令
function keyEvent(e) {
    var oEvt = e || window.event
    var oObj = oEvt.target || oEvt.srcElement
    var currkey = e.keyCode || e.which || e.charCode
    switch(currkey) {
        case 37:
        robotBox.transLeft()
        break

        case 38:
        robotBox:transTop()
        break
    
        case 39:
        robotBox:transRight()
        break

        case 40:
        robotBox:transBottom()
        break

        default:
        break
    }
}
window,onkeydown = keyEvent