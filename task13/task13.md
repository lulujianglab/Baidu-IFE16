 # 任务目的：

        JavaScript初体验
        初步明白JavaScript的简单基本语法，如变量、函数
        初步了解JavaScript的事件是什么
        初步了解JavaScript中的DOM是什么
        
 # 任务描述：

        参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写
        本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边
        
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>IFE JavaScript Task 01</title>
          </head>
        <body>

          <label>请输入北京今天空气质量：<input id="aqi-input" type="text"></label>
          <button id="button">确认填写</button>

          <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

        <script type="text/javascript">

        (function() {
          /*
          在注释下方写下代码
          给按钮button绑定一个点击事件
          在事件处理函数中
          获取aqi-input输入的值，并显示在aqi-display中
          */

        })();

        </script>
        </body>
        </html>
        
## 知识点：事件模型

       补充点：addEventListener的第三个参数是用于决定事件模型的，当父元素和子元素都绑定了事件时，这个参数决定先触发哪个事件，false为冒泡事件模型：即子元素绑定的事件先响应，父元素绑定的事件后相应，true问捕获事件模型，与冒泡事件模型执行顺序相反。注意点：决定事件模型的是父元素绑定事件时传的第三个参数。
       
       对事件模型不了解可以查看链接：
       http://www.cnblogs.com/dtdxrk/archive/2012/06/28/2567132.html

## [结果图](https://lulujianglab.github.io/IFE16/task13/)
