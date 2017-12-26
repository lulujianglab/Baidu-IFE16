# 任务目的：

        在上一任务基础上继续JavaScript的体验
        深入学习JavaScript的事件机制及DOM操作
        学习事件代理机制
        学习简单的表单验证功能
        学习外部加载JavaScript文件
        
# 任务描述：

        参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
        用户输入的城市名必须为中英文字符，空气质量指数必须为整数
        用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
        用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
        用户可以点击表格列中的“删除”按钮，删掉那一行的数据
        
task.html

        <!DOCTYPE>
        <html>
          <head>
            <meta charset="utf-8">
            <title>IFE JavaScript Task 01</title>
            <script src="task.js"></script>
          </head>
        <body>

          <div>
            <label>城市名称：<input id="aqi-city-input" type="text"></label><br>
            <label>空气质量指数：<input id="aqi-value-input" type="text"></label><br>
            <button id="add-btn">确认添加</button>
          </div>
          <table id="aqi-table">
          <!--
            <tr>
              <td>城市</td><td>空气质量</td><td>操作</td>
            </tr>
            <tr>
              <td>北京</td><td>90</td><td><button>删除</button></td>
            </tr>
            <tr>
              <td>北京</td><td>90</td><td><button>删除</button></td>
            </tr>
           -->
          </table>

        </body>
        </html>
        
task.js

        /**
         * aqiData，存储用户输入的空气指数数据
         * 示例格式：
         * aqiData = {
         *    "北京": 90,
         *    "上海": 40
         * };
         */
        var aqiData = {};

        /**
         * 从用户输入中获取数据，向aqiData中增加一条数据
         * 然后渲染aqi-list列表，增加新增的数据
         */
        function addAqiData() {

        }

        /**
         * 渲染aqi-table表格
         */
        function renderAqiList() {

        }

        /**
         * 点击add-btn时的处理逻辑
         * 获取用户输入，更新数据，并进行页面呈现的更新
         */
        function addBtnHandle() {
          addAqiData();
          renderAqiList();
        }

        /**
         * 点击各个删除按钮的时候的处理逻辑
         * 获取哪个城市数据被删，删除数据，更新表格显示
         */
        function delBtnHandle() {
          // do sth.

          renderAqiList();
        }

        function init() {

          // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

          // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

        }

        init();
        
## 知识点补充：
     html引入外部文件时记得放入body中。因为放在head中的JS代码会在页面加载完成之前就读取，而放在body中的JS代码，会在整个页面加载完成之后读取。所以当我们想定义一个全局对象，而这个对象是页面中的某个按钮时，我们必须将其放入body中，道理很明显：如果放入head，那当你定义的时候，那个按钮都没有被加载，可能获得的是一个undefind。
     
     JS放在head和放在body中的区别：http://blog.csdn.net/lumeier/article/details/46398009
     
    childNodes和getElementsByTagName一样，获得的是数组，访问的时候记得添加[]

## [结果图](https://lulujianglab.github.io/IFE16/task16/)
