# 引入你的第一个模块 —— 关卡定义

## 一个标准的关卡定义

关卡定义往往是一个关卡最开始定义的模块，它一般而言是必须的。

它在大多数关卡文件中总是第一个 objects，除了定义关卡名称、关卡的世界类型等基础信息外，它还负责引入这个关卡所需的模块。

下面是一个参考的关卡定义模块的定义：

```JSON
{
  "objclass": "LevelDefinition", // (1)
  "objdata": { //(2)
    "StageModule": "RTID(EgyptStage@LevelModules)", //(3)
    "Name": "egypt1", //(4)
    "Description": "Description", //(5)
    "LevelNumber": 1, //(6)
    "Loot": "RTID(DefaultLoot@LevelModules)", //(7)
    "StartingSun": 50, //(8)
    "Modules": [ //(9)
      "RTID(ZombiesDeadWinCon@LevelModules)",
      "RTID(DefaultZombieWinCondition@LevelModules)",
      "RTID(ChallengeModule@CurrentLevel)"
      //...
    ]
  }
}
```

- `(1)`是模块的`objectclass`名称，`LevelDefinition`即为关卡定义模块
- `(2)`是这个模块的`objdata`，就是这个模块的各个数据。这是一个 JSON 的对象，在其中的各类键值对取决这个模块的具体需要。
- `(3)`定义了这个关卡的世界类型，`EgyptStage@LevelModules`就是指神秘埃及，关于其他世界的类型名称，请移步 [TutorialStage](https://pvz2cndiy.github.io/docs/reference/types/modules.html#tutorialstage)
- `(4)`是这个关卡的名字
- `(5)`是这个关卡的描述，可以被省略
- `(6)`是这个关卡的波数
- `(7)`不修改
- `(8)`是初始阳光数，可以省略
- `(9)`是一个数组，表明了这个关卡所引入的全部其他模块

## 关卡模块的引入

请看上面的例子，我们引入了三个模块，它们是`RTID(ZombiesDeadWinCon@LevelModules)`, `RTID(DefaultZombieWinCondition@LevelModules)`, `RTID(ChallengeModule@CurrentLevel)`

一个模块的名字中，`RTID()`是固定的，而括号里面的内容以@为分割，分为了两个部分

其中前面一个部分是这个模块的`objectclass`，比如`ZombiesDeadWinCon`就引入了一个关卡胜利条件为僵尸全部死亡的模块

而@后面的部分就是指这个模块的`objdata`是在这个关卡文件里面定义还是直接使用它的"默认值"，`LevelModules`表示直接用默认值，不在这个关卡文件里面定义这个模块的`objdata`，而`CurrentLevel`则指在这个关卡文件里面定义模块的`objdata`

## 关卡被模块所控制

一个关卡其实就是被模块所控制，除了在 LevelDefinition 中定义的最基础的一些信息之外，其他的全部关卡行为比如胜利条件、出怪等信息全部被一个一个的模块所控制。

所以模块构成了一个关卡文件的最主要的部分，我们写关的过程实际上是不断引入模块，并对模块的`objdata`进行修改的过程。
