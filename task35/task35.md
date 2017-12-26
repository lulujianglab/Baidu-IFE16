# 任务目的

        练习JavaScript在DOM、字符串处理相关知识
        练习对于复杂UI，如何进行数据机构建模
        
# 任务描述

        如图 http://7xrp04.com1.z0.glb.clouddn.com/task_2_35_1.jpg 命令输入框由input变为textarea，可以允许输入多条指令，每一行一条
        textarea左侧有一列可以显示当前行数的列（代码行数列），列数保持和textarea中一致
        当textarea发生上下滚动时，代码行数列同步滚动
        能够判断指令是否合法，不合法的指令给出提示（如图 http://7xrp04.com1.z0.glb.clouddn.com/task_2_35_2.jpg ）
        点击执行时，依次逐条执行所有命令
        对于GO，TRA以及MOV指令增加可以移动格子数量的参数，例如
        GO 3：向当前方向前进三格
        TRA TOP 2：向屏幕上方平移两格
        MOV RIG 4：方向转向屏幕右侧，向屏幕的右侧移动四格

## notes

        CSS3的resize属性规定是否可由用户调整元素的尺寸。

        实时显示行数可以通过获取相同class的个数来确定。匹配换行符的个数，来动态设置每行的行数。

[结果图](https://lulujianglab.github.io/IFE16/task35/)
