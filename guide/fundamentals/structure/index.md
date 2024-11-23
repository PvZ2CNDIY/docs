# 关卡文件的结构

关卡文件以一个JSON文件组成，其中定义了该关卡中的各类事件、出怪、模式等关卡信息

一个JSON文件的整体结构如下：

```JSON
{
    "version": 1, //此处应固定
    "objects": [
        //模块定义
        {
            "uid": "1.0.4f120cb0", //uid，可缺省
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
