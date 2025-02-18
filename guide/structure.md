# 关卡文件的结构

关卡文件以一个 JSON 文件组成，其中定义了该关卡中的各类事件、出怪、模式等关卡信息

一个 JSON 文件的整体结构如下：

```JSON
{
    "version": 1, //此处应固定
    "#comment": "Your Description", //描述
    "objects": [
        //模块定义
        {
            "objclass": "{objclass}", //模块的objclass名称
            "objdata": {
                ...
                //具体参数定义
            },
            "aliases": [ //别名定义，可缺省
				...
			]
        },
        ...
    ]
}
```

关卡的主要部分都包含在各个模块内，接下来的指引的基础部分将为聚焦各个重要模块的使用

当然，指引不可能包含全部模块的使用说明，在您阅读完指引内容后，您应该可以自行尝试引入其他新的模块

而所有的模块说明在本文档的参考部分内，请移步[模块参考](https://pvz2cndiy.github.io/docs/reference/types/modules.html)
