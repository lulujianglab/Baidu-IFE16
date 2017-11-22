var txt = document.getElementById('inputText');
var content = document.getElementById("content");
var numberStatus = 0;
//左进按钮
function inputLeftIn() {
    if (numberStatus == 1) { alert("已随机选取数字，无法手动添加。");
        return false; }
    // 判断输入的数字格式
    var value = validNum();
    // 判断输入的数字长度
    var liNum = content.childNodes.length;
    if (value != false) {
        if (liNum < 60) {
            // 创建一个li元素[createElement]，添加到ul元素中
            var newItem = document.createElement("li");
            // 创建一个文本值[createTextNode]，添加到li元素中
            var textnode = document.createTextNode(value);
            newItem.appendChild(textnode);
            // 插入之前用insertBefore(newItem,index)
            content.insertBefore(newItem, content.childNodes[0]);
            // 设置li元素柱形条的样式[.style.]
            newItem.style.height = value + 'px';
            newItem.style.width = '15px';
            newItem.setAttribute('title', value);
        } else {
            alert("最多输入60个哦~");
        }
    }
}
//右进按钮
function inputRightIn() {
    if (numberStatus == 1) { alert("已随机选取数字，无法手动添加。");
        return false; }
    var value = validNum();
    var liNum = content.childNodes.length;
    if (value != false) {
        if (liNum < 60) {           
            var newItem = document.createElement("li");   
            var textnode = document.createTextNode(value);
            newItem.appendChild(textnode);
            // 插入之后直接用appendChild
            content.appendChild(newItem);
            newItem.style.height = value + 'px';
            newItem.style.width = '15px';
            newItem.setAttribute('title', value);

        } else {
            alert("最多输入60个哦！");
        }
    }
}

//左出按钮
function inputLeftOut() {
    // innerHTML对应的createTextNode
    alert("删除的最左侧节点： " + content.firstChild.innerHTML);
    // 删除节点用removeChild
    content.removeChild(content.firstChild);
}
//右出按钮
function inputRightOut() {
    // 删除最右节点要先计算出子节点长度[childNodes.length]，也可以直接用lastNode
    alert("删除的最右侧节点： " + content.childNodes[content.childNodes.length - 1].innerHTML);
    content.removeChild(content.childNodes[content.childNodes.length - 1]);
}
//给已出现的Li都添加点击事件,为了避免误操作，把这个点击删除的功能给去掉
// content.addEventListener("click", function(e) {
//     content.removeChild(e.target);
// }, false)

//过滤数字
function validNum() {
    var num = parseInt(txt.value);
    // 判断是否为数字
    if ((isNaN(num)) || (num < 10) || (num > 100)) {
        alert("请输入10-100的数字。");
        return false;
    } else {
        return num;
    }
}

//随机来60个数字
function randomNum() {
    var html = "";
    if (status == 1) {
        return false };
    for (var i = 1; i < 40; i++) {
        // 随机生成10到100的数
        var x = Math.floor(Math.random() * 90 + 10);
        html += "<li style='height:" + x + "px;width:15px;transition:all .5s;' title=" + x + ">" + x + "</li>"; //因为我排序时候提取的是innerHTML，所以这里要把值写入innerHTML
    }
    content.innerHTML = html;
    numberStatus = 1;
}

//循环遍历改变位置
function sort() {
    var Li = content.childNodes,
    len = Li.length,
    i = 0,
    j = len - 1,
    sortSpeed = 50,
    inputSpeed = document.getElementById("ideNum").value;
    if (inputSpeed.match(/^[1-9]\d/)) { sortSpeed = inputSpeed };

    function timeout() {
        if (i < len) {
            if (j > i) {
                Li[j].style.backgroundColor = "red";
                if (parseInt(Li[j].innerHTML) < parseInt(Li[j - 1].innerHTML)) {
                    temp = Li[j];
                    Li[j] = Li[j - 1];
                    Li[j - 1] = temp;
                    Li[j].style.backgroundColor = "#00FF00";
                    content.insertBefore(Li[j], Li[j - 1]);
                    setTimeout(timeout, sortSpeed);
                    j--;
                } else {
                    j--;
                    Li[j].style.backgroundColor = "#00FF00";
                    setTimeout(timeout, sortSpeed);
                }
            } else { //这个else语句很关键！！！
                i++;
                Li[j].style.backgroundColor = "#000";
                j = len - 1;
                setTimeout(timeout, sortSpeed);
            }
        }
    }
    setTimeout(timeout, sortSpeed);
}

document.getElementById("leftIn").addEventListener("click", inputLeftIn, false);
document.getElementById("rightIn").addEventListener("click", inputRightIn, false);
document.getElementById("leftOut").addEventListener("click", inputLeftOut, false);
document.getElementById("rightOut").addEventListener("click", inputRightOut, false);
document.getElementById('sortData').addEventListener("click", function() {
    if(numberStatus!=1){return false};
    if (status != 1) {
        sort();
        status = 1;
    }
}, false);
document.getElementById('randomData').addEventListener("click", randomNum, false)
// 更新页面用location.reload
document.getElementById('update').addEventListener('click', function() { location.reload(); }, false)
