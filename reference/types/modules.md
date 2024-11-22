# 模块
## TimeEnergy
回忆之旅能量条
### 参数
* `TimeEnergyValueMax`: `float` 时空能量最大值，默认值为`300.0`
* `TimeEnergyTriggers`: `array[object]` 时空触发器，默认拥有虫洞两个、传送门两个、黑洞一个
  * `TriggerRange`: `object` 触发范围
    * `Min`: `float` 触发范围的最低百分比
    * `Max`: `float` 触发范围的最高百分比
  * `Cooldown`: `float` 触发的冷却长度
  * `TriggerType`: `string` 触发器类型
    * 根据触发器类型不同，仍有其他参数，此处略去
### 变种
下面列出了其他使用`TimeEnergyModuleProperties`为`objclass`且有较强相似性的modules.

### TimeEnergy1
与`TimeEnergy`相比有以下差别：
* 时空能量最大值默认值为`350.0`
* 传送门时机有细微差异
* 传送门类型为`"pvz1_B"`与`"pvz1_C"`，而非`"pvz1_A"`

### TimeEnergy2
与`TimeEnergy`相比有以下差别：
* 时空能量最大值默认值为`350.0`
* 仅有一个时空触发器，为虫洞，触发区间为`0.0~0.1`，冷却值为`9999.0`

## SeedPacketHalfTimeModule
使卡槽内的卡片冷却缩短至原先的一半
### 参数
* `CooldownMultiplier` : `float` 具体缩短的倍数，默认值为`0.5`
* `HomeworldToExcludeFromOverride`: `string` <Badge type="warning" text="尚不确定" /> 其中排除掉的植物的所属世界，默认值为`""`
  * 该参数默认值为空，未发现实用

## DefaultSunDropper
阳光掉落
### 参数
* `InitialSunDropDelay` : `float` 初始阳光掉落延迟，默认值为`2.0`
* `SunCountdownBase` : `float` 基础阳光掉落间隔，默认值为`4.25`
* `SunCountdownRange` : `float` <Badge type="warning" text="尚不确定" /> 阳光掉落间隔的浮动范围，默认值为`2.75`
* `SunCountdownIncreasePerSun` : `float` 每个阳光掉落后，阳光掉落间隔的增长量，默认值为`0.1`
* `SunCountdownMax` : `float` 阳光掉落间隔的最大值，默认为`9.5`

## ArenaScoreTiles
超Z的分数地砖
### 参数
* `InitialGridItemPlacements` : `array[object]` 分数地砖放置列表
  * `GridX` : `int` 放置的列
  * `GridY` : `int` 放置的行
  * `TypeName` : `string` 具体放置的地砖类型

默认值将在8,9列放置5x分数地砖，在6,7列放置3x分数地砖，在4,5列放置2x分数地砖

## DefaultRainDark
启用暴风雨黑屏效果
### 参数
* `InitialDarkDelay` : `float` 暴风雨黑暗效果启动延迟，默认值为`2.0`
* `DarkCountdownBase` : `float` 基础闪电照亮间隔，默认值为`4.25`
* `DarkCountdownRange` : `float` <Badge type="warning" text="尚不确定" /> 闪电照亮间隔的浮动范围，默认值为`2.75`
* `DarkCountdownIncreasePerDark` : `float` 每次闪电照亮后，闪电照亮间隔的增长量，默认值为`0.1`
* `DarkCountdownMax` : `float` 闪电照亮间隔的最大值，默认为`9.5`

## FrontLawnMowers
放置前院小推车
### 参数
* `ResourceGroupNames` : `array[string]` 对应的资源组，默认值与小推车具体类型有关
* `MowerEntryAnimDuration` : `float` 小推车进入动画用时，默认为`2.5`
* `MowerActivatedAudioEvent": `string` 小推车激活时产生的音效，默认值与小推车类型有关
* `MowerPopAnim`: `string` 小推车的<Badge type="warning" text="需要明确" />Pop动画名，默认值与小推车类型有关
* `MowerIdleAnimWeights` : `array[int]` 小推车播放动画时的动画权重，默认未定义
* `MowerExplodeAtGridX`: `int` 小推车自毁的行数，默认未定义
* `UnlimitedMowers` : `bool` <Badge type="warning" text="尚不确定" /> 小推车无限量，默认为未定义
  * 出现于`SCORINGPLAYTEST7D.JSON`
### 变种
下面列出了其他使用`LawnMowerProperties`为`objclass`且有较强相似性的modules.
| modules名 | 对应 | 备注 |
| :---: | :----: | :--- |
| FrontLawnMowers|前院小推车||
| EgyptMowers | 埃及小推车||
| PirateMowers| 海盗小推车||
| WestMowers|西部小推车||
| KongFuMowers|功夫小推车||
| FutureMowers|未来小推车||
| BrainMowers|未来脑子小推车| 未使用，**尚不确定** 疑似与我是僵尸模式下的脑子有关 |
| DarkMowers| 黑暗小推车||
| BeachMowers| 沙滩小推车||
| IceageMowers|冰河小推车|`MowerIdleAnimWeights`被定义为`[500,5,2]`|
| IceageZombossMowers| 冰河僵王小推车|`MowerIdleAnimWeights`被定义为`[500,5,2]` <br> `MowerExplodeAtGridX`被定义为`6`|
| LostCityMowers| 失落小推车||
| EightiesMowers| 摇滚小推车||
| EightiesZombossMowers| 摇滚僵王小推车|`MowerExplodeAtGridX`被定义为`7`|
| DinoMowers| 侏罗纪小推车||
| ModernMowers|摩登小推车||
| SteamMowers| 蒸汽小推车||
| RenaiMowers| 复兴小推车||
| HeianMowers| 平安小推车||
| FairyTaleMowers | 童话小推车||
| RunningSubwayMowers| 地铁跑酷联动小推车||

## TutorialStage
场景的基础信息。
### 参数
* `ResourceGroupNames` : `array[string]` 对应的资源组
* `GroupsToUnloadForAds` : `array[string]`  只在少数信息使用，<Badge type="warning" text="尚不确定" />卸载的资源组
* `BelongsToWorld` : `string` 所属的世界
* `StagePrefix` : `string` 对应关卡的前缀
* `BackgroundResourceGroup` : `string` 背景对应的资源组
* `BackgroundImagePrefix` : `string` 背景使用图像名称的前缀
* `BackgroundImageLeft` : `string` 背景图左侧部分的图像名称
* `BackgroundImageMiddle` : `string` 背景图主要部分的图像名称
* `BackgroundImageRight` : `string` 背景图右侧部分的图像名称
* `LevelPowerupSet` : `string` <Badge type="warning" text="尚不确定" />关卡升级设置
* `GravestoneImagePrefixes` : `array[string]` 场景对应墓碑图像前缀列表
* `GravestoneDefaultTypeName` : 场景下墓碑的默认类型名
* `BasicZombieTypeName` : `string` 场景基础僵尸的名称
* `FlagZombieTypeName` : `string` 场景旗帜僵尸的名称
* `FlagVeteranZombieTypeNames` : `array[string]` 场景下拓展旗帜僵尸名称列表
* `Armor1ZombieTypeName` : `string` 场景一级护甲（路障）僵尸的名称
* `Armor2ZombieTypeName` : `string` 场景二级护甲（铁桶）僵尸的名称
* `MusicSuffix` : `string` 场景音乐名称的后缀
* `AmbientAudioSuffix` : `string` 环境音效名称的后缀
* `RailcartDefaultTypeName` : `string` 场景下矿车的默认类型名，默认为`"railcart_egypt"`
* `DirtSpawnEffectName` : `string` 场景下（僵尸）从土中生成特效的名称，默认为`"POPANIM_EFFECTS_TOMB_DIRT"`
* `ZombieEventType` : `string` 场景突袭事件的类型
* `BreakerInterval` : `float` <Badge type="warning" text="尚不确定" /> 某种破坏间隔，出现在`VacationPirateStage`，大部分未定义
* `DisabledStreetCells` : `array[object]` 僵尸预览区域禁用的生成位点
  * `mX` : `int` 禁用格的对应横坐标
  * `mY` : `int` 禁用格的对应纵坐标 

### 变种
下面列出了其他使用`StageModuleProperties`为`objclass`且有较强相似性的modules.

上述参数中，大部分modules并没有全部完整地定义。
| modules名 | 对应 | 备注 |
| :---: | :----: | :--- |
| TutorialStage | 教程 | |
| FestivalStageLevelOne | 春节1 | |
| FestivalStageLevelTwo | 春节2 | |
| FestivalStageLevelThree | 春节3| |
| FestivalStageLevelFour | 春节4| |
| FestivalStageLevelEndless | 春节无尽 | |
| ArenaStage | 超Z | |
| ChildrenDayStage | 儿童节 | |
| UnchartedNeedforspeedStage | **尚不确定**  极品飞车秘境 |  |
| WhackAMoleStage | 蒸汽锤僵尸 | 蒸汽锤僵尸关卡未发现调用 |
| VacationPirateStage | 海盗度假 | |
| RiftStage | 追击 ||
| NightStage | 夜晚 | |
| UnchartedAnniversaryStage | **尚不确定**  周年秘境? |  |
| CardGameStage | **尚不确定**  卡牌游戏? | |
| SnowNightStage | 圣诞 | |
| OverwhelmSnowNightStage | **尚不确定**  覆雪圣诞 | |
| SnowModernStage | 雪摩登 | |
| OverwhelmSnowModernStage | **尚不确定**  覆雪摩登 | |
| RunningNormalStage | 地铁跑酷 | |
| FairyTaleStage | 童话 | |
| PlantWarsStage | **尚不确定**  | |
| SoccerStage | 世界杯 | |
| NewYearDaylightStage | 新年（白日） | |
| NewYearNightStage | 新年（黑夜） | |
| UnchartedArbordayStage | 植树节秘境 | |
| SpringDaylightStage | 春日（白日） | |
| SpringNightStage | 春日（黑夜） | |
| HalloweenStage | 万圣节 | |
| SummerDaylightStage | 夏日（白日） | |
| SummerNightStage | 夏日（黑夜） | |
| Birthday9DaylightStage | 9周年（白日） | |
| UnchartedIceageStage | 冰河秘境 | |

除此之外，下面列出了不使用`StageModuleProperties`为`objclass`但具有强烈相似性的modules.
| modules名 | 对应 | objclass | 备注 |
| :---: | :----: | :---: | :--- |
| EgyptStage | 埃及 | EgyptStageProperties | |
| VacationEgyptStage | 度假埃及 | EgyptStageProperties | |
| PirateStage | 海盗 | PirateStageProperties | 具有额外属性<br><ul><li>`PlantsWhichCannotBePlantedOnPlanks` : `object` 不能种植在夹板上的植物类型</li><ul><li>`ListType` : `string` 名单类型，默认为`"whitelist"`</li><li> `List` : `array[string]` 对应的植物列表</li></ul></ul> |
| PoolDaylightStage | 白日泳池 | PoolDaylightStageProperties | |
| PoolNightStage | 黑夜泳池 | PoolDaylightStageProperties | |
| WestStage | 西部 | WestStageProperties | 具有额外属性<br><ul><li>`RailImageTop` : `string` 矿车的顶部贴图</li><li>`RailImageMid` : `string` 矿车的中部贴图</li><li>`RailImageBottom` : `string` 矿车的底部贴图</li></ul>|
| VacationWestStage | 度假西部 | WestStageProperties |与`WestStage`一致|
| KongfuStage | 功夫 | KongFuStageProperties | 具有额外属性<br><ul><li>`HaveGearBG` : `bool` **尚不确定**  是否有齿轮背景，可能与联动矿车有关</li></ul>|
| KongfuBossStage | 功夫BOSS | KongFuStageProperties | `HaveGearBG`取值为`true`|
| VacationKongfuBossStage | 度假功夫BOSS | KongFuStageProperties | `HaveGearBG`取值为`true`|
| VacationKongfuBossStage2 | 度假功夫BOSS | KongFuStageProperties | `HaveGearBG`取值为`true`|
| FutureStage | 未来 | FutureStageProperties | 具有额外属性<br><ul><li>`FactoryArmDropTime`:`float` **尚不确定**  </li><li>`FactoryArmGrabTime`:`float` **尚不确定**  </li><li>`FactoryArmRiseTime`:`float` **尚不确定**  </li><li>`FactoryArmCoinDropCount`:`float` **尚不确定**  </li><li>`FactoryArmCoinDropChance`:`float` **尚不确定**  </li><li>`LinkedTilePropagationAlpha` : `float` 能量地砖传播透明度</li></ul> |
| VacationFutureStage | 度假未来 | FutureStageProperties | 与`FutureStage`一致|
| DarkStage | 黑暗 | DarkStageProperties | 具有额外属性<br><ul><li>`Armor3ZombieTypeName` : `string` 场景三级护甲僵尸的名称</li></ul>|
| VacationDarkStage | 度假黑暗 | DarkStageProperties | 与`DarkStage`一致|
| TheatreDarkStage | 黑暗剧场 | DarkStageProperties | 与`DarkStage`一致|
| BeachStage | 海滩 | BeachStageProperties | |
| BeachSnakeStage | 海滩鳄梨贪吃蛇 | BeachStageProperties | |
| IceageStage | 冰河 | IceAgeStageProperties | 具有额外属性<br><ul><li>`Armor3ZombieTypeName` : `string` 场景三级护甲僵尸的名称</li></ul>|
| IceageRiverCrossingStage | 冰河渡渡鸟 | IceAgeStageProperties | 与`IceageStage`一致|
| IceageEliminateStage | 冰河连线消除 | IceAgeStageProperties | 与`IceageStage`一致|
| SkycityStage | 天空 | SkyCityStageProperties | 具有额外属性<br><ul><li>`Armor3ZombieTypeName` : `string` 场景三级护甲僵尸的名称</li><li>`AutoCannonDamage1` : `int` 自动发射炮的伤害1，默认值为`50`</li><li>`AutoCannonDamage2` : `int` 自动发射炮的伤害2，默认值为`300`</li><li>`AutoCannonDamage3` : `int` 自动发射炮的伤害3，默认值为`300`</li><li>`SkillCannonDamage2` : `int` 技能发射炮的伤害1，默认值为`300`</li><li>`SkillCannonDamage3` : `int` 技能发射炮的伤害2，默认值为`300`</li><li>`AutoFireInterval` : `int` 自动发射炮的间隔，默认值为`5`</li><li>`SkillFireInterval` : `int` 技能发射炮的使用间隔，默认值为`60`</li><li>`HasGridItemAirShip` : `bool` **需要补充** 是否拥有场地物品帮助船</li><li>`HasCannon` : `bool` 是否启用发射炮，默认未定义</li></ul>|
| SkycityPooyanStage | 天空壮植凌云 | SkyCityStageProperties | `HasGridItemAirShip`与`HasCannon`取值为`false`，其余独有属性除`Armor3ZombieTypeName`外未定义|
| SkycityFishingStage | 天空钓鱼 | SkyCityStageProperties | `HasGridItemAirShip`与`HasCannon`取值为`false`，其余独有属性除`Armor3ZombieTypeName`外未定义|
| SkycityTestStage | 天空测试 | SkyCityStageProperties | 疑似测试残留，`HasGridItemAirShip`与`HasCannon`取值为`false`，其余独有属性除`Armor3ZombieTypeName`外未定义|
| RunningSubwayStage | 地铁跑酷 | RunningSubwayStageProperties | 具有额外属性<br><ul><li>`Armor3ZombieTypeName` : `string` 场景三级护甲僵尸的名称</li><li>`HasGridItemAirShip` : `bool` **需要补充** 功能未知，疑似从`SkycityPooyanStage`修改时残留，取值`false`</li><li>`HasCannon` : `bool` **需要补充** 功能未知，疑似从`SkycityPooyanStage`修改时残留，取值`false`</li></ul>|
| LostCityStage | 失落 | LostCityStageProperties | |
| VacationLostCityStage | 度假失落 | IceAgeStageProperties | 不知为何使用了`IceAgeStageProperties`而非`LostCityStageProperties`<br>没有定义`Armor3ZombieTypeName`|
| EightiesStage | 摇滚 | EightiesStageProperties | |
| DinoStage | 侏罗纪 | DinoStageProperties | |
| FrontLawnStage | 前院 | FrontLawnStageProperties | |
| FrontLawnSpringStage | 春日前院 | FrontLawnStageProperties | |
| RoofStage | 屋顶 | RoofStageProperties | 具有额外属性<br><ul><li>`PlantsWhichCannotBePlantedOnRoof` : `object` 不能种植在屋顶上的植物类型</li><ul><li>`ListType` : `string` 名单类型，默认为`"whitelist"`</li><li> `List` : `array[string]` 对应的植物列表，默认为空</li></ul><li>`PlantsWhichCanBeUpdateOnRoof` : `object` 可以在屋顶上更新的植物类型</li><ul><li>`ListType` : `string` 名单类型，默认为`"whitelist"`</li><li> `List` : `array[string]` 对应的植物列表，默认为`"jackfruit"`与`"smallChestnut"`</li></ul></ul> |
| SnowRoofStage | 下雪屋顶 | RoofStageProperties | 与`RoofStage`一致|
| OverwhelmSnowRoofStage | **尚不确定** 积雪屋顶 | RoofStageProperties | 与`RoofStage`一致|
| RoofNightStage | 夜晚屋顶 | RoofStageProperties | 与`RoofStage`一致|
| ModernStage | 摩登 | ModernStageProperties | |
| SteamStage | 蒸汽 | SteamStageProperties | |
| RenaiStage | 复兴 | RenaiStageProperties | 具有额外属性<br><ul><li>`Anims` : `array[object]` 场景的动画列表</li><ul><li>`AnimName` : `string` 动画名称</li><li> `AnimPos` : `object` 动画的位置</li><ul><li>`x` : `float` 横坐标</li><li> `y` : `float` 纵坐标</li></ul></ul></ul> |
| HeianStage | 平安 | HeianStageProperties | |
| RiftStageScore | 追击 | JoustStageProperties |具有额外属性<br><ul><li>`Armor3ZombieTypeName` : `string` 场景三级护甲僵尸的名称</li><li>`DrawMultiplierOverlay` : `bool` **需要补充** 在覆盖层绘制乘数，默认为`true`</li><li>`DrawMultiplierLabels` : `bool` **需要补充** 在覆盖层绘制标签，默认为`false`</li></ul> |
| NewPVPStage | **需要确认** 双人 | NewPVPStageProperties | |
| TwisterStage | **尚不明确** 宝石迷阵旋风? | ModernStageProperties | |
| BowlingStage | 保龄球 | ModernStageProperties | |
| OverwhelmStage | **尚不明确**  | ModernStageProperties | |
| JoustStage | **需要确认**竞技场?  | JoustStageProperties |与`RiftStageScore`一致 |
