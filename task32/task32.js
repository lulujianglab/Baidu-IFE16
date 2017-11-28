// 表单工厂 配置表单项
function formFactory(name, type, func, rules, success, fail) {
    this.label = name; //表单标签，label的for标签
    this.type = type; //表单类型，input的type标签
    this.validator = func; //表单验证规则
    this.rules = rules; //验证规则提示 p标签初始化内容
    this.success = success; //验证通过提示 p标签验证通过内容
    this.fail = fail; //验证失败提示 p标签验证失败内容
}

// 验证的工厂
var checkFactory = {
    name: function() {
        var getLength = function(str) {
            var countLength = 0
            for (var i = 0; i < str.length; i++) {
                var charCode = str.charCodeAt(i)
                if (charCode >= 0 && charCode <= 128) {
                    countLength += 1
                } else{
                    countLength +=2
                }
            }
            return countLength
        }
        var nameInfo = document.getElementsByClassName('name')
        for(var i = 0; i < nameInfo.length; i++) {
            nameInfo[i].onblur = function(e) {
                if (e.target.value == "") { //验证是否为空
                    e.target.nextElementSibling.innerHTML = name_input.rules
                } else if (getLength(e.target.value) < 4 || getLength(e.target.value) > 16) { //验证长度是否符合标准
                    e.target.nextElementSibling.innerHTML = name_input.fail
                    e.target.nextElementSibling.setAttribute ("class", "fail")
                    e.target.setAttribute("class", "fail")
                } else {
                    e.target.nextElementSibling.innerHTML = name_input.success
                    e.target.nextElementSibling.setAttribute("class", "success")
                    e.target.setAttribute("class", "success")
                }
            }
        }
    },
    password: function() {
        var passwordInfo = document.getElementsByClassName('password')
        for (var i = 0; i < passwordInfo.length; i++) {
            passwordInfo[i].onblur = function(e) {
                if (e.target.value != "") {
                    if (e.target.value != "") {
                        e.target.nextElementSibling.setAttribute("class", "success")
                        e.target.setAttribute("class", "success")
                        this.nextElementSibling.innerHTML = password_input.success
                    } else{
                        e.target.nextElementSibling.setAttribute("class", "rules")
                        e.target.setAttribute("class", "rules")
                        this.nextElementSibling.innerHTML = password_input.rules
                    }
                }
            }
        }
    },
    password_confirm: function() {
        var password_confirmInfo = document.getElementsByClassName('password_confirm')
        for(var i = 0; i < password_confirmInfo.length; i++){
            password_confirmInfo[i].onblur = function(){
                if (this.value != "") {
                    // previousSibling（前一个同胞节点）
                    if (this.parentNode.previousSibling.childNodes[1].value === this.value) {
                        this.nextElementSibling.setAttribute("class", "success")
                        this.setAttribute("class", "success")
                        this.nextElementSibling.innerHTML = password_confirm_input.success
                    } else {
                        this.nextElementSibling.setAttribute("class", "fail")
                        this.setAttribute("class", "fail")
                        this.nextElementSibling.innerHTML = password_confirm_input.fail
                    }
                } else {
                    this.nextElementSibling.setAttribute("class", "rules")
                    this.setAttribute("class", "rules")
                    this.nextElementSibling.innerHTML = password_confirm_input.rules
                }
            }
        }
    },
    email: function() {
        var emailInfo = document.getElementsByClassName('email')
        for(var i = 0; i < emailInfo.length; i++){
            emailInfo[i].onblur = function(e){
                if (this.value != "") {
                    var filter = /^[a-z0-9]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/
                    if (filter.test(this.value)) {
                        this.nextElementSibling.setAttribute("class", "success")
                        this.setAttribute("class", "success")
                        this.nextElementSibling.innerHTML = email_input.success
                    } else {
                        this.nextElementSibling.setAttribute("class", "fail")
                        this.setAttribute("class", "fail")
                        this.nextElementSibling.innerHTML = email_input.fail
                    }
                } else {
                    this.nextElementSibling.setAttribute("class", "rules")
                    this.setAttribute("class", "rules")
                    this.nextElementSibling.innerHTML = email_input.rules
                }
            }
        }
    },
    phone: function() {
        var phoneInfo = document.getElementsByClassName('phone')
        for(var i = 0; i < phoneInfo.length; i++){
            phoneInfo[i].onblur = function(){
                if (this.value != "") {
                    var filter = /^1[3|4|5|8][0-9]\d{8}$/i
                    if (filter.test(this.value)) {
                        this.nextElementSibling.setAttribute("class", "success")
                        this.setAttribute("class", "success")
                        this.nextElementSibling.innerHTML = phone_input.success
                    } else {
                        this.nextElementSibling.setAttribute("class", "fail")
                        this.setAttribute("class", "fail")
                        this.nextElementSibling.innerHTML = phone_input.fail
                    }
                } else {
                    this.nextElementSibling.setAttribute("class", "rules")
                    this.setAttribute("class", "rules")
                    this.nextElementSibling.innerHTML = phone_input.rules
                }
            }
        }
    }
}

// 表单实例
var name_input = new formFactory('name', 'text', checkFactory.name, "必填，长度为4~16个字符", "名称格式正确", "长度只能为4~16个字符")
var password_input = new formFactory('password', 'password', checkFactory.password, "请输入密码", "密码可用", "请输入密码")
var password_confirm_input = new formFactory('password_confirm', 'password', checkFactory.password_confirm, "再次输入相同的密码", "密码输入一致", "密码输入不一致")
var email_input = new formFactory('email', 'email', checkFactory.email, "输入您的邮箱", "邮箱格式正确", "邮箱格式错误")
var phone_input = new formFactory('phone', 'text', checkFactory.phone, "输入您的手机号码", "手机格式正确", "手机格式错误")

var inputArr = [name_input, password_input, password_confirm_input, email_input, phone_input] //把对象们存入数组

var labelName = { //中文名对象
    name: "名称",
    password: '密码',
    password_confirm: '确认密码',
    email: "邮箱",
    phone: "手机号码"
}

var checkboxArray = ['name', 'password', 'password_confirm', 'email', 'phone'] //checkbox id 和inputArr对应起来

var count = []

// 渲染表单
var renderForm = function() {
    var html = ""
    for (var i=0; i < checkboxArray.length; i++) {
        if (document.getElementById(checkboxArray[i]).checked == true) {
            var checked_name = checkboxArray[i]
            // 拼接html，如下所示
            // <div>
            //     <label for="password">密码</label>
            //     <input type="password" class="success">
            //     <p class="success">密码可用</p>
            // </div>
            html += "<div><label for='" + inputArr[i].label + "'>" + labelName[checked_name] + "</label><input type='" + inputArr[i].type + "' class='" + inputArr[i].label + "' /><p>" + inputArr[i].rules + "</p></div>"
            count.push(inputArr[i]) //把选出的Input组成新的数组，等会回调他们的验证函数
        }
    }
    
    html = "<div class = 'factory'>" + html + "</div>"
    document.getElementById('form').innerHTML += html
    // for in循环精准对被选择了的Input进行验证
    for (var x in count) {
        //var date = new Date()
        count[x].validator()
        // console.log(count[x],date)
    } 
    console.log(count)
}

document.getElementById('create').addEventListener('click', renderForm, false)
document.getElementById('reset').addEventListener('click', function(){
    location.reload()
},false)