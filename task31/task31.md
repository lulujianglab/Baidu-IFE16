# 任务目的

        加强对JavaScript的掌握
        熟悉常用表单处理逻辑
        
# 任务描述

        如链接中所示，http://7xrp04.com1.z0.glb.clouddn.com/task_2_31_1.jpg
        在页面中完成两个单选框，切换单选框的不同选项时下方显示的表单随之切换。
        当选择在校生时，出现两个select下拉菜单，一个选择城市，一个选择学校，当选择非在校生时，出一个文本输入框
        学校下拉菜单里的学校名单均为城市下拉菜单中所选的城市中的大学，当城市发生变化时，学校一起发生变化
        城市及学校的数据随意编造即可，无需真实完整

## notes

       select可以通过索引值获取当前选中的文本或值。原生的js方法 http://blog.sina.com.cn/s/blog_a73036570101e9ry.html
       
       var obj = document.getElementByIdx_xx_x('testSelect'); //定位id

       var index = obj.selectedIndex; // 选中索引

       var text = obj.options[index].text; // 选中文本

       var value = obj.options[index].value; // 选中值

## [结果图](https://lulujianglab.github.io/IFE16/task31/)
