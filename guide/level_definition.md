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

其中前面一个部分是这个模块的名称，比如`ZombiesDeadWinCon`就引入了一个关卡胜利条件为僵尸全部死亡的模块

而@后面的部分就是指这个模块的是从 `LevelModules` 文件中引入还是本文件中引入，`LevelModules`表示从 `LevelModules` 文件中引入，而`CurrentLevel`则指从这个关卡文件中引入这个模块，我们会在下面仔细阐释这两个的区别。

## 引入方式的区别

请想象对于一些模块，如果你每次都要频繁引入，那么每次写一关都要重复地写这些模块的各种定义，这十分麻烦。而且对于一些模块，实际上对任何关卡的`objdata`都是固定的，或者这些模块根本不存在`objdata`。

所以，我们存在一个 `LevelModules` 文件，这个文件中对非常多的模块都进行了定义，也给这些模块的部分`objdata`附上了一个初始的值。此时，对于这些模块，我们可以直接从 LevelModules 文件中引入。

需要说明的是，`LevelModules` 文件和一个关卡文件很类似，只是它引入了非常多的模块以供其他关卡文件使用。

当然，很多模块比如出怪，我们都需要对各个关卡做差异化，此时就需要一个新的选项，即从本关卡文件引入。这个引入实际上会扫描这个关卡文件的`objdata`，并从中寻找到这个模块。

## 模块名和`objclass`

模块名通过一个模块的 `aliases` 数组来控制。

在上面的例子中，从 LevelModules 中引入的`ZombiesDeadWinCon`,`DefaultZombieWinCondition`都不是这个模块的`objclass`，这三个模块的`objclass`分别是`ZombiesDeadWinConProperties`,`ZombiesAteYourBrainsProperties`

在 `LevelModules` 文件中，这两个模块被这样定义：

```JSON
{
    "objclass": "ZombiesAteYourBrainsProperties",
    "aliases": [
      "DefaultZombieWinCondition"
    ],
    "objdata": {
        "ZombieWinPositionX": -80.0
    }
}
```

```JSON
{
    "objclass": "PlantWarsZombiesAteYourBrainsProperties",
    "aliases": [
      "DefaultPlantWarsZombieWinCondition"
    ],
    "objdata": {
        "ZombieWinPositionX": -80.0
    }
}

```

可以看到，我们引入关卡模块的时候使用的是这个模块在 `aliases` 属性中定义的名称而不是 `objclass`

但是，这也并不意味着 `objclass` 没有任何作用，当我们需要从本关卡文件中引入模块时（即模块数据需要重新定义时），我们需要用到 `objclass`

对于上述例子，`ChallengeModule` 是从本关卡文件中引入的模块，但是这个模块并不是一个在 `LevelModules` 中所定义的模块 —— 是的，没有一个预置的模块是这个名字

那么，这个名字既然是一个关卡设计师所凭空捏造出来的模块名，程序该如何去识别这个模块所对应的行为呢？—— 通过 `objclass`。也就是说，在这个关卡文件定义的模块中，有一个模块叫做 `ChallengeModule`，它依赖于一个 `objclass`，决定了这个模块具体的行为。

请看某个关卡文件中对 `ChallengeModule` 的定义：

```JSON
{
    "aliases": [
      "ChallengeModule"
    ],
    "objclass": "StarChallengeModuleProperties",
    "objdata": {
        "Challenges": [
          [
            "RTID(BeatTheLevel@CurrentLevel)"
          ]
        ],
        "ChallengesAlwaysAvailable": true
    }
}
```

可以看到，关卡文件里出现了一个以 `ChallengeModule` 为名的模块！这个模块依赖于 `StarChallengeModuleProperties`，这表明了这个模块的行为，而通过对这个 `objclass` 的 `objdata` 的重写，我们完成了对这个关卡特有的 `ChallengeModule` 的定义（也就是挑战条件）

让我们来总结一下，`aliases` 定义了一个模块的名字，在 `LevelDefinition` 中引入模块时的模块名就来自于此，而这个模块具体展现出的行为则由 `objclass` 来定义。

值得注意的是，对于从本关卡文件引入的模块来说，模块名怎么取完全掌握在关卡设计者的手里 —— 你可以选择把模块命名成 `ZaGuoMaiTie`，然后将这个模块的具体行为设置为锁定那几个耳熟能详的植物来展示你的恶趣味 —— 当然，我们并不提倡这样做，请给模块取一个合适的名字。

`objdata`,`objclass`和模块名称的具体关系可见下图：

![image](https://github.com/user-attachments/assets/d09429ff-1806-4c84-9819-aa84258dfb4a)


## 关卡被模块所控制

一个关卡其实就是被模块所控制，除了在 LevelDefinition 中定义的最基础的一些信息之外，其他的全部关卡行为比如胜利条件、出怪等信息全部被一个一个的模块所控制。

所以模块构成了一个关卡文件的最主要的部分，我们写关的过程实际上是不断引入模块，并对模块的`objdata`进行修改的过程。
